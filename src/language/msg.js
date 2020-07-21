const hx = require('hbuilderx');

/**
 * @description 通知消息
 */
function showNotification(msgType,lang='') {
    switch (msgType){
        case 'focusFail':
            hx.window.showErrorMessage('获取文件路径失败，请选中或将焦点置于编辑器。',['我知道了']);
            break;
        case 'env':
            let msg = '需要配置' + lang + '运行环境';
            hx.window.showErrorMessage(msg, ['配置'+lang,'关闭']);
            break;
        default:
            break;
    }
};

module.exports = {
    showNotification
}
