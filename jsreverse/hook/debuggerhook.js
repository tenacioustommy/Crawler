(function () {
  aaa = Function.prototype.constructor;
  Function.prototype.constructor = function (a) {
    if (a == "debugger") {
      return function () {};
    }
    return aaa(a);
  };
})();
