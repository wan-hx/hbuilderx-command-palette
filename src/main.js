const hx = require('hbuilderx');
const path = require('path');

const data = require('./data.js');
const openLocalPath = require('./utils/openLocalPath.js');
const sourceControl = require('./utils/sourceControl.js');
const create = require('./utils/createFile.js');
const codec = require('./utils/codec.js');

const pluginmanagerPath = path.join(hx.env.appRoot,'plugins','plugin-manager','pluginmanager.js');
const pm = require(pluginmanagerPath);

const thirdPlugin = require('./utils/thirdPlugin.json');

/**
 * @description activie third plugin，execute command
 * @param {Object} parm
 */
function executeThirdCommand(info) {
    let {pluginName,command} = info;

    pm.activatePlugin({
        "id":pluginName,
        "":""
    });
    hx.commands.executeCommand(command);
};

/**
 * @description show command panl
 */
async function main(parm) {
    // commands list
    var picklistdata = [...data.allCommandList, ...data.svn_git, ...data.actions ];

    try{
        let allThirdPluginsCommands = thirdPlugin.commands;
        picklistdata = [...picklistdata,...allThirdPluginsCommands]
    }catch(e){
        console.log(e);
    }


    hx.window.showQuickPick(picklistdata, {
        placeHolder: '请选择要操作的菜单或命令',
        matchOnDetail: true,
        matchOnDescription: true
    }).then(function(result) {
        if (!result) {
            return;
        };

        switch (result.type) {
            case 'url':
                hx.env.openExternal(result.info);
                break;
            case 'path':
                openLocalPath.openLocalPath()
                break;
            case 'hx_command':
                let commandName = result.command;
                hx.commands.executeCommand(commandName);
                break;
            case 'plugin_command':
                executeThirdCommand(result);
                break;
            case 'svn':
                sourceControl.sourceControl('svn',result.cmd,parm);
                break;
            case 'git':
                sourceControl.sourceControl('git',result.cmd,parm);
                break;
            case 'standard_create':
                create.createFile(result.info,parm);
                break;
            case 'codec':
                codec.codec(result.info);
                break;
            default:
                break;
        };
    });
};

module.exports = {
    main
}
