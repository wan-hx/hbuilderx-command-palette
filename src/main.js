const hx = require('hbuilderx');

const data = require('./data/data.js');
const openLocalPath = require('./utils/openLocalPath.js');
const sourceControl = require('./utils/sourceControl.js');
const create = require('./utils/createFile.js');
const codec = require('./utils/codec.js');

/**
 * @description show command panl
 */
async function main(parm) {
    // commands list
    var picklistdata = [...data.allCommandList, ...data.actions ];

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
            default:
                break;
        };
    });
};

module.exports = {
    main
}
