const hx = require('hbuilderx');
const path = require('path');
const fs = require('fs');

/**
 * @description 获取hx编辑器的路径
 * @param {Object} channel_name
 * @param {Object} info
 */
function getPath(parm) {
    var fsPath,workspaceFolder,currentDir;
    try {
        try{
            fsPath = parm.document.uri.fsPath;
            workspaceFolder = parm.document.workspaceFolder.uri.fsPath;
        }catch(e){
            fsPath = parm.fsPath;
            workspaceFolder = parm.workspaceFolder.uri.fsPath;
        }
        let state = fs.statSync(fsPath);
        if (state.isFile()) {
            currentDir = path.dirname(fsPath);
        } else {
            currentDir = fsPath;
        }
    } catch (e) {
        console.error(e);
        hx.window.showErrorMessage('获取路径失败，请选中后再试。');
        return {fsPath,workspaceFolder,currentDir}
    }
    return {fsPath,workspaceFolder,currentDir}
}

/**
 * @description 创建输出控制台
 */
function createOutputChannel(channel_name, info) {
    // 创建控制台
    let outputChannel = hx.window.createOutputChannel(channel_name);
    // 显示控制台
    outputChannel.show();
    // 输出内容
    outputChannel.appendLine("====================================================");
    for (let s of info) {
        outputChannel.appendLine('\n' + s);
    }
};

module.exports = {
    createOutputChannel,
    getPath
};
