const hx = require('hbuilderx');

var checkUpdate = require('./checkUpdate.js');
const main = require('./main.js');

//该方法将在插件激活的时候调用
function activate(context) {
    let commandPalette = hx.commands.registerCommand('commandPalette.main', (parm) => {
        main.main(parm);
        checkUpdate();
    });
    context.subscriptions.push(commandPalette);
};

//该方法将在插件禁用的时候调用（目前是在插件卸载的时候触发）
function deactivate() {

};

module.exports = {
    activate,
    deactivate
}
