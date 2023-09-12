(function () {
  "use strict";
  $(document).ready(
    (function () {
      if (!$("#captcha-img").length) {
        return; // 没有验证码时退出
      }
      $("#captcha-box").stop();
      $("#captcha-box").attr("style", "overflow: hidden;");
      $("#operate-buttons").show();

      let raw_placeholder = $("#captcha").attr("placeholder");
      $("body").append($('<canvas width="110" height="40" style="display: none;" id="captcha-canvas"></canvas>'));
      let img_elem = document.getElementById("captcha-img");
      let canvas_elem = document.getElementById("captcha-canvas");
      let recognize = function () {
        canvas_elem.getContext("2d").drawImage(img_elem, 0, 0);
        let dataURL = canvas_elem.toDataURL("image/jpeg");
        fetch(dataURL).then(function (response) {
          response.arrayBuffer().then(function (arrayBuffer) {
            let formData = new FormData();
            formData.append("image", new File([arrayBuffer], "captcha.jpg"));
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "https://plus.sjtu.edu.cn/captcha-solver/", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4 && xhr.status === 200) {
                var captchaText;
                try {
                  captchaText = JSON.parse(xhr.responseText)["result"];
                } catch (e) {
                  document.getElementById("captcha").setAttribute("placeholder", "识别服务异常");
                  return;
                }
                if (captchaText.includes("l")) {
                  document.getElementById("captcha-img").click();
                  return;
                }
                document.getElementById("captcha").value = captchaText;
                document.getElementById("captcha").setAttribute("placeholder", raw_placeholder);
                document.getElementById("login-form").style.display = "block";
              }
            };

            xhr.send(formData);
            // GM.xmlHttpRequest({
            //   url: "https://plus.sjtu.edu.cn/captcha-solver/",
            //   method: "POST",
            //   data: formData,
            //   onload: function (response) {
            //     let captcha_text;
            //     try {
            //       captcha_text = JSON.parse(response.responseText)["result"];
            //     } catch (e) {
            //       $("#captcha").attr("placeholder", "识别服务异常");
            //       return;
            //     }
            //     if (captcha_text.includes("l")) {
            //       $("#captcha-img").click();
            //       return;
            //     }
            //     $("#captcha").attr("value", captcha_text);
            //     $("#captcha").attr("placeholder", raw_placeholder);
            //     $("#login-form").show();
            //   },
            // });
          });
        });
      };
      const do_recognize = function () {
        $("#captcha-img").hide();
        $("#captcha").attr("placeholder", "正在加载验证码");
        $("#captcha").attr("value", "");
        let img_complete_check = setInterval(function () {
          if (document.getElementById("captcha-img").complete) {
            clearInterval(img_complete_check);
            $("#captcha").attr("placeholder", "正在识别");
            $("#captcha-img").show();
            recognize();
          }
        }, 1);
      };
      do_recognize(); // 打开后执行一次
      $("#captcha-img").on("click", do_recognize); // 刷新验证码后再执行一次
    })()
  );
})();
