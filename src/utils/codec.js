const hx = require('hbuilderx');
const common = require('./common.js');

/**
 * @description 中文转unicode
 * @param {Object} str
 */
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
};


/**
 * @description 读取剪贴板
 */
function clipboardRead() {
    return new Promise((resolve, reject) => {
        let textPromise = hx.env.clipboard.readText();
        textPromise.then(function(res) {
            if (res) {
                resolve(res)
            } else {
                reject('')
            }
        })
    });
};


/**
 *@description 编码解码
 */
async function codec(type) {
    let content = await clipboardRead();
    switch (type) {
        case 'UrlDecode':
            const result = await decodeURIComponent(content);
            common.createOutputChannel('解码', result);
            break;
        case 'UrlEncode':
            const encodeResult = await encodeURIComponent(content);
            common.createOutputChannel('编码', encodeResult);
            break;
        case "ChineseToUnicode":
            const encodeUnicodeResult = encodeUnicode(content);
            common.createOutputChannel('unicode', encodeUnicodeResult);
            break;
        case "UnicodeToChinese":
            const decodeUnicodeResult = unescape(content.replace(/\\/g, "%"));
            common.createOutputChannel('unicode', decodeUnicodeResult);
            break;
        default:
            break;
    }
}

module.exports = {
    codec
};
