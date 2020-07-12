const hx = require('hbuilderx');
const version = require('./version.json')

/**
 * @description show box
 */
function showBox(isMajor) {
    let msg = '插件【命令面板】 发布了新版本！快去HBuilderX插件市场更新吧！';
    let btn = ['去更新','本周不再提醒'];
    if (isMajor) {
        msg = '插件【命令面板】 重要更新！快去HBuilderX插件市场更新吧！'
    }
    hx.window.showInformationMessage(msg,btn).then(result => {
        if (result === '去更新') {
            const url = 'https://ext.dcloud.net.cn/plugin?name=command-palette'
            hx.env.openExternal(url)
        } else if (result === '本周不再提醒') {
            let config = hx.workspace.getConfiguration();
            config.update("commandPalette.isCheckUpdate", false);
        }
    })
};

/**
 * @description check plugin update
 */
function checkUpdate() {
    // get week
    let week = new Date().getDay();
    // check user config
    let config = hx.workspace.getConfiguration();
    let isCheckUpdate = config.get('commandPalette.isCheckUpdate');
    if (!isCheckUpdate && week !== 1) {
        return;
    };

    let {
        versionCode,
        versionUrl
    } = version;
    if (!versionCode || !versionUrl) {
        return;
    };

    let http = require('http');
    http.get(versionUrl, (res) => {
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
        });
        res.on("end", () => {
            let info = JSON.parse(data);
            if ('version' in info && 'major' in info) {
                if (versionCode != info.version) {
                    showBox(info.major);
                }
            }
        });
        res.on("error", (e) => {
            console.log(`错误:${e.message}`)
        });
    });
};

module.exports = {
    checkUpdate
}
