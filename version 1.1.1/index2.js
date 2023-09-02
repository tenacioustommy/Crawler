var fs = require('fs');
var tools = require('./Tools/ToolsCode.js');
var browser = require('./Browser/BrowserCode.js');

const { VM, VMScript } = require('vm2'); // 新开了一个进程，去除了node环境相当于纯净v8环境沙箱

var toolscode = tools.GetToolsCode();                                       // 获取框架工具代码
var browsercode = browser.GetBrowserCode();                                 // 获取框架浏览器代码
var log_code = "\r\ndebugger;\r\n\r\n";

var web_js_code = fs.readFileSync(`${__dirname}/Sites/环境检测.js`);  // 获取目标网站js代码

var all_code = toolscode + browsercode + log_code + web_js_code;
// const script = new VMScript(all_code, `${__dirname}/debugger.js`); //真实路径，浏览器打开的就是该缓存文件
const script = new VMScript(all_code, "https://www.adidas.com.cn/tMMnGCDvGBaFd/kx/YBI5zErsciek/OaJ5bkcQuLVYNi/eVAlAg/Fn0/4fk43VAAB"); //akamai

const vm = new VM(); // new 一个纯净v8环境
debugger
var result = vm.run(script);
console.log(result);
debugger