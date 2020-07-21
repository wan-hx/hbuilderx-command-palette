const hx = require('hbuilderx');
const path = require('path');

const main = require('./src/main.js');
const run = require('./src/language/run.js')
const base = require('./src/utils/base.js');
var check = require('./src/checkUpdate.js');

var isScanPlugin = false;
var config = hx.workspace.getConfiguration();


//该方法将在插件激活的时候调用
function activate(context) {
    // form plugins/xxx/package.json, get third plugin command
    async function getThirdPluginsCommand() {
        if (!isScanPlugin) {
            await base.getPluginsCommands();
            isScanPlugin = true;
        }
    };

    let commandPalette = hx.commands.registerCommand('extension.commandPalette', (parm) => {
        let status = config.get('commandPalette.isDisable');
        if (status) {
            return hx.window.showErrorMessage('命令面板功能已禁用, 若想使用, 请重新开启。', ['启用', '我再想想']).then(result => {
                if (result == '启用') {
                    config.update("commandPalette.isDisable", false).then(() => {
                        hx.commands.executeCommand('extension.commandPalette');
                    });
                };
            });
        } else {
            getThirdPluginsCommand();
            main.main(parm);
            check.checkUpdate();
        };
    });
    context.subscriptions.push(commandPalette);

    // 运行代码到终端
    let runCodeInTerminal = hx.commands.registerCommand('extension.runCodeInTerminal', (parm) => {
        run.runCode(parm);
    });
    context.subscriptions.push(runCodeInTerminal);
};

//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

};

module.exports = {
    activate,
    deactivate
}
