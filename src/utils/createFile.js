const hx = require('hbuilderx');
const path = require('path');
const fs = require('fs');

const common = require('./common.js');

/**
 * @description 创建文件
 */
function createFile(filename, parm) {
    let {
        fsPath,
        workspaceFolder,
        currentDir
    } = common.getPath(parm);

    // template path
    let template_path = path.join(path.resolve(__dirname,'..'), 'template', filename.slice(1));
    // target path
    let target_path = path.join(currentDir, filename);
    // copy file to target dir
    fs.copyFile(template_path, target_path, (err) => {
        if (err) {
			console.error(err);
            return hx.window.showErrorMessage(filename + '创建失败!');
        } else {
            hx.workspace.openTextDocument(target_path);
        }
    });
};

module.exports = {
    createFile
}
