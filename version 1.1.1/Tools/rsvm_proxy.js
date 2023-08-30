rsvm.proxy = function (obj) {
    // Proxy 可以多层代理，即 a = new proxy(a); a = new proxy(a);第二次代理
    // 后代理的检测不到先代理的
    if (rsvm.debugconfig.ifproxy == false) {
        return obj
    }
    var proxy = obj;
    try {
        proxy = new Proxy(obj, {
            set(target, property, value) {
                try {
                    if (rsvm.debugconfig.ifprintlog) {
                        let log_info = { "类型": "set-->", "调用者": target, "调用属性": property, "设置值": value, "值类型": typeof value };
                        rsvm.debugconfig.print.log([log_info]);
                        // rsvm.debugconfig.logcache.push(log_info);
                    }
                } catch {
                    debugger;
                }
                return Reflect.set(...arguments); //这是一种反射语句，这种不会产生死循环问题
            },
            get(target, property, receiver) {
                let value = Reflect.get(...arguments);
                try {
                    if (rsvm.debugconfig.ifprintlog) {
                        let baseType = ["String", "Array", "Date", "Math", "Object"];
                        let log_info = { "类型": "get<--", "调用者": target, "调用属性": property, "获取值": value, "值类型": typeof value };
                        if (baseType.indexOf(property) == -1){
                            rsvm.debugconfig.print.log([log_info]);
                            // rsvm.debugconfig.logcache.push(log_info);
                        }
                        if (value === undefined && "XMLHttpRequest" == property){
                            debugger;
                        }
                        if (property === "0\x0614\x15_FA" || property === "DTsyGVldZB"){
                            debugger;
                        }
                    }
                } catch {
                    debugger;
                }
                return value;  // target中访问属性不会再被proxy拦截，所以不会死循环
            }
        });
    } catch {
        debugger;
    }
    return proxy;
}