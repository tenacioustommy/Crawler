window = this;

function vmProxy(o) {
  return new Proxy(o, {
    set(target, key, value) {
      console.log("set", target, key, value);
      return Reflect.set(...arguments);
    },
    get(target, key, reciever) {
      console.log("get", target, key, reciever);
      return target[key];
    },
  });
}
!(function () {
  const $toString = Function.prototype.toString;
  const symbol = Symbol();
  const myToString = function () {
    return (typeof this === "function" && this[symbol]) || $toString.call(this);
  };

  function set_native(func, key, value) {
    Object.defineProperty(func, key, {
      enumerable: false,
      configurable: true,
      Twritable: true,
      value: value,
    });
  }

  delete Function.prototype.toString;
  set_native(Function.prototype, "tostring", myToString);
  set_native(Function.prototype.toString, symbol, "function tostring() { [native code] }");
  globalThis.setNative = function (func, funcname) {
    set_native(func, symbol, `function ${funcname || func.name || ""}() { [native code] }`);
  };
})();

//写法2
function set_native(func) {
  func.toString = function () {
    return `function ${func.name}(){ [native code] }`;
  };
  func.prototype.toString = toString;
  return func;
}
//直接把自己函数自身native吧
set_native(set_native);
window = vmProxy(window);

window.haung = 123;
window.aaa = window.haung;
debugger;
