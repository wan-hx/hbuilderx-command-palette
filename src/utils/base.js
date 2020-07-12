const os = require('os');
const fs = require('fs');
const path = require('path');
// const request = require('request');
const hx = require('hbuilderx');

const JSONC = require('json-comments');

const osName = os.platform();

const excludeOther = ['.DS_Store', 'package-lock.json', 'etc']
const excludePluginList = [
    'about', 'format', 'hbuilder.root', 'snippet', 'pm', 'ls',
    'css', 'css-language-features', 'html', 'javascript', 'jshint', 'eslint-js',
    'php', 'node', 'jre', 'npm', 'node_modules', 'nodeserver',
    'qtwebengine', 'hxsimplebrowser', 'cef3', 'qrencode',
    'templates', 'akamud.vscode-theme-onedark-2.1.0',
    'theme-default', 'theme-icons-default', 'theme-icons-default-colorful',
    'theme-seti', 'theme-vsode', 'builtinterminal', 'plugin-manager',
    'weapp-tools', 'uniapp', 'uniapp-cli', 'launcher','command-palette'
];

/**
 * @description 目录遍历
 * @param {Object} dir
 * @param {Object} filelist
 */
var fileList = [];
var walkSync = function(dir, filelist) {
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        filelist.push(file);
    });
    return filelist;
};

/**
 * @description 获取HBuilderX本机已安装的插件列表
 */
function getLocalInstalledPluginsList(hxPluginDir) {
    return new Promise((resolve, reject) => {
        let olddata = walkSync(hxPluginDir);
        let newData = olddata.filter(item =>
            !excludePluginList.includes(item) && !excludeOther.includes(item)
        )
        if (newData) {
            resolve(newData)
        } else {
            reject([])
        }
    });
};

/**
 * @description 从package.json获取插件详情
 * @param {Object} hxPluginDir
 * @param {String} pluginName
 */
function getPluginDetails(hxPluginDir, pluginName) {
    return new Promise((resolve, reject) => {
        var info = {
            "pluginName": pluginName,
            "data": []
        }
        try {
            let packagePath = path.join(hxPluginDir, pluginName, 'package.json');
            if (!fs.existsSync(packagePath)) {
                resolve(info);
            };
            fs.readFile(packagePath, 'utf8', (err, data) => {
                if (err) {
                    reject(info)
                }
                let FileContext = JSONC.parse(data);
                if ('contributes' in FileContext) {
                    if ('commands' in FileContext.contributes) {
                        info['data'] = FileContext.contributes.commands;
                        resolve(info)
                    }
                }
                resolve(info)
            })
        } catch (e) {
            reject(info)
        }
    })
};

/**
 * @description get hx plugins commands info
 */
async function getPluginsCommands() {
    // check user config
    let config = hx.workspace.getConfiguration();
    let isShowThirdPluginCommand = config.get('commandPalette.isShowThirdPluginCommand');
    if (!isShowThirdPluginCommand) {
        return []
    };

    // get hx base info
    let hxPluginDir = path.join(hx.env.appRoot, 'plugins');

    // get local HBuilderX installed list
    let installedPluginsList = await getLocalInstalledPluginsList(hxPluginDir);

    const promises = installedPluginsList.map(pluginName => {
        return getPluginDetails(hxPluginDir, pluginName)
    });

    return new Promise((resolve, reject) => {
        var result = [];
        Promise.all(promises).then(function(plugins) {
            for (let p of plugins) {
                if ('data' in p && 'pluginName' in p) {
                    if (p.data.length || p.data !== undefined) {
                        let tmp1 = p.data.map(function(v) {
                            return {
                                'label': p.pluginName + ': ' + v['title'],
                                'description': p.pluginName,
                                'command': v['command'],
                                'type': 'plugin_command',
                                'pluginName': p.pluginName
                            };
                        });
                        result = [...result, ...tmp1];
                    };
                };
            };
            resolve(result);
        });
    });
}

module.exports = {
    getPluginsCommands
}
