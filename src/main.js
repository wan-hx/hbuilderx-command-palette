const hx = require('hbuilderx');

const data = require('./data.js');
const openLocalPath = require('./utils/openLocalPath.js');
const sourceControl = require('./utils/sourceControl.js');
const create = require('./utils/createFile.js');
const codec = require('./utils/codec.js');


/**
 * @description 显示命令面板
 */
function main(parm) {
    // 列表数据
    let picklistdata = [...data.allCommandList, ...data.svn_git, ...data.actions ];

    hx.window.showQuickPick(picklistdata, {
        placeHolder: '请选择要操作的命令',
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
