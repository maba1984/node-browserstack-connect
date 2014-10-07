var path = require('path');
exports.path = process.platform === 'win32' ? path.join(__dirname, 'BrowserStackLocal', 'BrowserStackLocal.exe') : path.join(__dirname, 'BrowserStackLocal', 'BrowserStackLocal');
exports.start = function() {
    exports.defaultInstance = require('child_process').execFile(exports.path);
    return exports.defaultInstance;
}
exports.stop = function () {
    if (exports.defaultInstance != null){
        exports.defaultInstance.kill();
    }
}