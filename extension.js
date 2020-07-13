const hx = require('hbuilderx');

const main = require('./src/main.js');
const base = require('./src/utils/base.js');
const check = require('./src/checkUpdate.js');

//该方法将在插件激活的时候调用
function activate(context) {
    // check plugin update
    check.checkUpdate();

    // form plugins/xxx/package.json, get third plugin command
    async function getThirdPluginsCommand() {
        await base.getPluginsCommands();
    };
    setTimeout(function() {
        getThirdPluginsCommand();
    }, 20);

    let commandPalette = hx.commands.registerCommand('extension.commandPalette', (parm) => {
        main.main(parm);
    });
    //订阅销毁钩子，插件禁用的时候，自动注销该command。
    context.subscriptions.push(commandPalette);
}
//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

}
module.exports = {
    activate,
    deactivate
}
