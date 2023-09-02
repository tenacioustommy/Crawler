(function () {
  "use strict";
  Object.defineProperty(document, "cookie", {
    get: function () {
      // debugger
      return "";
    },
    set: function (value) {
      debugger;
      return value;
    },
  });
})();
 
(function () {
  "use strict";
  var cookietmp = "";
  Object.defineProperty(document, "cookie", {
    get: function () {
      // debugger
      return cookietmp;
    },
    set: function (value) {
      // 存在这个键的cookie就debugger
      if (value.indexof("v") != -1) {
        debugger;
      }
      cookietmp = value;
      return value;
    },
  });
})();
