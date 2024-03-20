// pending -> resolved or rejected
// resolved reject 系统提供的函数
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const time = Math.random() * 10;
    if (time > 5) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 100);
});
// 调用then时，如果promise状态是resolved，会调用第一个函数，如果是rejected，会调用第二个函数
promise
  .then(function (value) {
    console.log(value); // Success!
  })
  .catch(function (reason) {
    console.log(reason);
  });
async function myFunction() {
  //   return "Hello";
  return Promise.resolve("World");
}
myFunction().then((res) => console.log(res)); // Hello
