const fs = require('fs');
const path = require('path');
const os = require('os');
const hx = require('hbuilderx');

const { exec } = require("child_process");
const { spawn } = require("child_process");

const msg = require('./msg.js');
let lang = require('./config.json');

const osName = os.platform();

/**
 * @description 某些语言不需要配置相应的环境
 * @param {String} fileExtension 文件扩展名
 */
function  specialLangCheck(fileExtension) {
    fileExtension = fileExtension.slice(1);
    AllowLangsList = []
    if (osName == 'darwin') {
        AllowLangsList = ['sh','py']
    } else if (osName == 'win32'){
        AllowLangsList = ['bat']
    } else {
        return false;
    };
    return AllowLangsList.includes(fileExtension) ? true : false;
};

/**
 * @description 获取语言以及程序路径
 * @param {Object} info
 */
function runInit(info) {
    let data = {
        'success': true,
        'fsPath': '',
        'language': '',
        'executePath': ''
    };

    // get file path
    try {
        data.fsPath = info.document.uri.fsPath;
    } catch (e) {
        data.fsPath = info.fsPath;
    };

    let stats = fs.statSync(data.fsPath);
    if (!stats.isFile()) {
        data.success = false;
        msg.showNotification('focusFail');
        return data;
    };

    // get file extname
    let fextname = path.extname(data.fsPath);

    // check
    if (!lang.fextname && !specialLangCheck(fextname)) {
        msg.showNotification('env',fextname);
        return data;
    };

    data.executePath = lang.fextname;
    return data;
};

/**
 * @param {Object} parm
 */
function runCode(parm) {
    let data = runInit(parm);

    if (!data.success) {
        return;
    };

    var terminal = require('child_process').spawn('bash');

    terminal.stdout.on('data', function (data) {
        console.log(data);
    });

    // terminal.on('exit', function (code) {
    //     console.log('child process exited with code ' + code);
    // });

    let url = 'http://www.baidu.com'
    terminal.stdin.write('cvlc "' + url +'" & \n');
    terminal.stdin.write('pause');
};

module.exports = {
    runCode
}
