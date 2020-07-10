const hx = require('hbuilderx');
const path = require('path');
const fs = require('fs');

/**
 * @description 打开本地文件路径
 */
function openLocalPath() {
    hx.window.showInputBox({
        prompt: "请输入路径"
    }).then((result) => {
        try {
            var stat = fs.lstatSync(result);
        } catch (e) {
            return hx.window.setStatusBarMessage('请输入一个有效的路径!', 5000, 'error');
        }
        if (stat.isDirectory() | stat.isFile()) {
            hx.workspace.openTextDocument(result);
        }
    })
};

module.exports = {
    openLocalPath
}
