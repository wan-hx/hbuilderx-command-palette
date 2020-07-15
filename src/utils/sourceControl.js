const hx = require('hbuilderx');
const path = require('path');
const fs = require('fs');
const {exec} = require('child_process');

const common = require('./common.js');


/**
 * @description svn/git相关操作
 * @param {Object} type svn|git
 * @param {Object} parm
 */
function sourceControl(type, cmd, parm) {
    var fsPath,workspaceFolder,currentDir;
    try {
        try{
            fsPath = parm.document.uri.fsPath;
            workspaceFolder = parm.document.workspaceFolder.uri.fsPath;
        }catch(e){
            fsPath = parm.fsPath;
            workspaceFolder = parm.workspaceFolder.uri.fsPath;
        }
        var isActiveState = fs.statSync(fsPath);
        if (isActiveState.isFile()) {
            currentDir = path.dirname(fsPath);
        } else {
            currentDir = fsPath;
        }

        var sourceDir = path.join(workspaceFolder, '.' + type);
        let isProjectState = fs.statSync(sourceDir);
    } catch (e) {
        return hx.window.showErrorMessage('请选中一个有效的SVN或git项目后再操作。');
    }

    // 执行命令
    let run_cmd = "cd " + currentDir + " && " + cmd;;
    let basename = path.basename(fsPath);
    if (cmd.includes('git log') && isActiveState.isFile()) {
        run_cmd = "cd " + currentDir + " && " + cmd + ' ' + basename;
    } else if (cmd.includes('git checkout --') && isActiveState.isFile()) {
        run_cmd = "cd " + currentDir + " && " + cmd + ' ' + basename;
    } else if (cmd.includes('git add')) {
        run_cmd = "cd " + currentDir + " && " + cmd + ' ' + fsPath;
    } else {
        run_cmd = "cd " + currentDir + " && " + cmd;
    };

    if (run_cmd) {
        console.log(run_cmd);
        exec(run_cmd, function(error, stdout, stderr) {
            if (!error) {
                hx.window.setStatusBarMessage('操作成功',3000,'info');
            };
            common.createOutputChannel(type,[stdout,stderr]);
        });
    };
};

module.exports = {
    sourceControl
}
