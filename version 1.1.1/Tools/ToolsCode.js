// .node.js文件的用途就是拼接多个文件的js代码
var fs = require('fs');

function GetToolsCode() {
    var code = "";
    code += fs.readFileSync(`${__dirname}/rsvm_memory.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/rsvm_savefunction.js`) + '\r\n';
    code += fs.readFileSync(`${__dirname}/rsvm_proxy.js`) + '\r\n';
    return code;
}

module.exports = {
    GetToolsCode
}