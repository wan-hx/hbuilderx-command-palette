const allCommandList = [{
    "label": "工具: 自定义快捷键",
    "description": "tool: set key",
    "command": "workbench.action.openGlobalKeybindings",
    "type": "hx_command",
    "key": ""
}, {
    "label": "工具: 插件安装",
    "description": "tool: plugin install",
    "command": "update.openPluginDialog",
    "type": "hx_command",
    "key": ""
}, {
    "label": "工具: 去插件市场安装插件",
    "description": "tool: plugin market install",
    "type": "url",
    "info": "https://ext.dcloud.net.cn/?cat1=1&cat2=11"
}, {
    "label": "帮助: 查看更新日志",
    "description": "help: hbuilderx release",
    "command": "update.showCurrentReleaseNotes",
    "type": "hx_command",
    "key": ""
}, {
    "label": "帮助: 查看运行日志",
    "description": "help: open run log",
    "command": "workbench.action.openlog",
    "type": "hx_command",
    "key": ""
}, {
    "label": "帮助: 检查更新",
    "description": "help: check update",
    "command": "update.checkForUpdate",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 重命名文件",
    "description": "file: rename file",
    "command": "renameFile",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 剪切文件",
    "description": "file: cut file",
    "command": "filesExplorer.cut",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 复制文件",
    "description": "file: copy file",
    "command": "filesExplorer.copy",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 粘贴文件",
    "description": "file: paste file",
    "command": "filesExplorer.paste",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：新建标签卡",
    "description": "file: new",
    "command": "workbench.action.files.newUntitledFile",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：关闭当前标签卡",
    "description": "file: close tab",
    "command": "workbench.action.closeActiveEditor",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：关闭所有标签卡",
    "description": "file: close all tab",
    "command": "workbench.action.closeAllEditors",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：显示左边的标签卡",
    "description": "file: left tab",
    "command": "workbench.action.leftTab",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：显示右边的标签卡",
    "description": "file: right tab",
    "command": "workbench.action.rightTab",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：重开已关闭标签卡",
    "description": "file: reopen tab",
    "command": "workbench.action.reopenClosedEditor",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第1个标签卡",
    "description": "file: tab 1",
    "command": "workbench.action.openEditorAtIndex1",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第2个标签卡",
    "description": "file: tab 2",
    "command": "workbench.action.openEditorAtIndex2",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第3个标签卡",
    "description": "file: tab 3",
    "command": "workbench.action.openEditorAtIndex3",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第4个标签卡",
    "description": "file: tab 4",
    "command": "workbench.action.openEditorAtIndex4",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第5个标签卡",
    "description": "file: tab 5",
    "command": "workbench.action.openEditorAtIndex5",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第6个标签卡",
    "description": "file: tab 6",
    "command": "workbench.action.openEditorAtIndex6",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第7个标签卡",
    "description": "file: tab 7",
    "command": "workbench.action.openEditorAtIndex7",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第8个标签卡",
    "description": "file: tab 8",
    "command": "workbench.action.openEditorAtIndex8",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到第9个标签卡",
    "description": "file: tab 9",
    "command": "workbench.action.openEditorAtIndex9",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：切换到最末尾的标签卡",
    "description": "file: tab 0",
    "command": "workbench.action.openEditorAtIndex0",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：往左移动一个标签卡",
    "description": "file: move left tab",
    "command": "workbench.action.moveEditorLeftInGroup",
    "type": "hx_command",
    "key": ""
}, {
    "label": "标签卡：往右移动一个标签卡",
    "description": "file: move right tab",
    "command": "workbench.action.moveEditorRightInGroup",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 新建",
    "description": "file: new",
    "command": "workbench.action.menu.new",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 打开外部文件",
    "description": "file: open",
    "command": "workbench.action.files.openFile",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 打开收藏菜单",
    "description": "file: fav",
    "command": "workbench.action.fav.menu",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 保存",
    "description": "file: save",
    "command": "workbench.action.files.save",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 另存为",
    "description": "file: saveAs",
    "command": "workbench.action.files.saveAs",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 全部保存",
    "description": "file: saveAll",
    "command": "workbench.action.files.saveAll",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 打开文件夹导入项目",
    "description": "file: open folder",
    "command": "workbench.action.files.openFolder",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 在命令行打开文件所在目录",
    "description": "file: terminal",
    "command": "revealFileInTerminal",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 打开文件所在目录",
    "description": "file: file in OS",
    "command": "revealFileInOS",
    "type": "hx_command",
    "key": ""
}, {
    "label": "行: 向下插入行",
    "description": "eidt: insert",
    "command": "editor.action.insertLineAfter",
    "type": "hx_command",
    "key": ""
}, {
    "label": "行: 向上插入行",
    "description": "eidt: insert line",
    "command": "editor.action.insertLineBefore",
    "type": "hx_command",
    "key": ""
}, {
    "label": "行: 反回车，即把光标前内容移到下一行",
    "description": "eidt: move",
    "command": "editor.action.shiftEnter",
    "type": "hx_command",
    "key": ""
}, {
    "label": "行: 上移一行",
    "description": "eidt: move",
    "command": "editor.action.moveLinesUpAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "行: 下移一行",
    "description": "eidt: move",
    "command": "editor.action.moveLinesDownAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向左删除",
    "description": "eidt: delete",
    "command": "deleteLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向右删除",
    "description": "eidt: delete",
    "command": "deleteRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向左删除词",
    "description": "eidt: delete",
    "command": "deleteWordLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向右删除词",
    "description": "eidt: delete",
    "command": "deleteWordRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向左删除驼峰词",
    "description": "eidt: delete",
    "command": "deleteWordPartLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 向右删除驼峰词",
    "description": "eidt: delete",
    "command": "deleteWordPartRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 删到行首",
    "description": "eidt: delete",
    "command": "deleteLineLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 删到行尾",
    "description": "eidt: delete",
    "command": "deleteLineRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "删除: 删除行",
    "description": "eidt: delete lines",
    "command": "editor.action.deleteLines",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: -无序列表符",
    "description": "eidt:",
    "command": "editor.action.unOrderListSymbolsByMinus",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: *无序列表符",
    "description": "eidt:",
    "command": "editor.action.unOrderListSymbolsByMultiply",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: +无序列表符",
    "description": "eidt:",
    "command": "editor.action.unOrderListSymbolsByPlus",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: >引用列表符",
    "description": "eidt:",
    "command": "editor.action.quoteListSymbols",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: 有序列表符",
    "description": "eidt:",
    "command": "editor.action.orderListSymbols",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: 任务列表符",
    "description": "eidt:",
    "command": "editor.action.taskListSymbols",
    "type": "hx_command",
    "key": ""
}, {
    "label": "插入: 已完成任务列表符",
    "description": "eidt:",
    "command": "editor.action.taskFinishListSymbols",
    "type": "hx_command",
    "key": ""
}, {
    "label": "复制",
    "description": "eidt: copy",
    "command": "editor.action.clipboardCopyAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "复制文件路径",
    "description": "eidt: copy path",
    "command": "editor.action.clipboardCopyPathAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "重复插入选区或当前行",
    "description": "eidt:",
    "command": "editor.action.duplicate",
    "type": "hx_command",
    "key": ""
}, {
    "label": "剪切",
    "description": "eidt: cut",
    "command": "editor.action.clipboardCutAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "粘贴",
    "description": "eidt: paste",
    "command": "editor.action.clipboardPasteAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "粘贴为HTML",
    "description": "eidt: paste html",
    "command": "editor.action.clipboardPasteAsHTML",
    "type": "hx_command",
    "key": ""
}, {
    "label": "从历史粘贴板粘贴",
    "description": "eidt: paste history",
    "command": "editor.action.clipboardPasteFromHistory",
    "type": "hx_command",
    "key": ""
}, {
    "label": "交换字符、选区或行",
    "description": "eidt: swich selection",
    "command": "editor.action.swichSelectionOrLine",
    "type": "hx_command",
    "key": ""
}, {
    "label": "撤销: 撤销",
    "description": "eidt: undo",
    "command": "undo",
    "type": "hx_command",
    "key": ""
}, {
    "label": "撤销: 重做",
    "description": "eidt: redo",
    "command": "redo",
    "type": "hx_command",
    "key": ""
}, {
    "label": "撤销: 撤销一个新光标或选区",
    "description": "eidt: undo selection",
    "command": "editor.action.undoSelection",
    "type": "hx_command",
    "key": ""
}, {
    "label": "格式化",
    "description": "eidt: format",
    "command": "editor.action.format",
    "type": "hx_command",
    "key": ""
}, {
    "label": "合并行",
    "description": "eidt: join line",
    "command": "editor.action.joinLines",
    "type": "hx_command",
    "key": ""
}, {
    "label": "注释: 注释/反注释",
    "description": "eidt: comment line",
    "command": "editor.action.commentLine",
    "type": "hx_command",
    "key": ""
}, {
    "label": "注释: 块注释",
    "description": "eidt: block comment",
    "command": "editor.action.blockCommentLine",
    "type": "hx_command",
    "key": ""
}, {
    "label": "注释: 注释菜单(含条件编译注释)",
    "description": "eidt: comment",
    "command": "editor.action.showCommentMenu",
    "type": "hx_command",
    "key": ""
}, {
    "label": "包围",
    "description": "eidt:",
    "command": "editor.action.SurroundBylanguage",
    "type": "hx_command",
    "key": ""
}, {
    "label": "反包围",
    "description": "eidt:",
    "command": "editor.action.UnSurroundBylanguage",
    "type": "hx_command",
    "key": ""
}, {
    "label": "加粗（md生效）",
    "description": "eidt: bold",
    "command": "editor.action.bold",
    "type": "hx_command",
    "key": ""
}, {
    "label": "大小写: 全部字母大写",
    "description": "eidt: uppercase",
    "command": "editor.action.transformToUppercase",
    "type": "hx_command",
    "key": ""
}, {
    "label": "大小写: 全部字母小写",
    "description": "eidt: lowercase",
    "command": "editor.action.transformToLowercase",
    "type": "hx_command",
    "key": ""
}, {
    "label": "大小写: 首字母大写",
    "description": "eidt: uppercase",
    "command": "editor.action.transformToTitlecase",
    "type": "hx_command",
    "key": ""
}, {
    "label": "激活代码助手",
    "description": "eidt: code suggest",
    "command": "editor.action.triggerSuggest",
    "type": "hx_command",
    "key": ""
}, {
    "label": "激活方法参数提示",
    "description": "eidt: parameter hints",
    "command": "Trigger Parameter Hints",
    "type": "hx_command",
    "key": ""
}, {
    "label": "缩进",
    "description": "eidt: tab",
    "command": "tab",
    "type": "hx_command",
    "key": ""
}, {
    "label": "反缩进",
    "description": "eidt: outdent",
    "command": "outdent",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 全选",
    "description": "select: select all",
    "command": "editor.action.selectAll",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向左选字",
    "description": "select: left select",
    "command": "cursorLeftSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向右选字",
    "description": "select: right select",
    "command": "cursorRightSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向上选行",
    "description": "select: up select",
    "command": "cursorUpSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向下选行",
    "description": "select: down select",
    "command": "cursorDownSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向左选词",
    "description": "select: word left select",
    "command": "cursorWordStartLeftSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向右选词",
    "description": "select: word right select",
    "command": "cursorWordEndRightSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向左选一个驼峰单词",
    "description": "select: word select",
    "command": "cursorWordPartLeftSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向右选一个驼峰单词",
    "description": "select: word select",
    "command": "cursorWordPartRightSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至软行首",
    "description": "select: home select",
    "command": "cursorHomeSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至软行尾",
    "description": "select: end select",
    "command": "cursorEndSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至行首",
    "description": "select: home select",
    "command": "cursorHomeDirectSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至行尾",
    "description": "select: end select",
    "command": "cursorEndDirectSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至段落开头",
    "description": "select: line start",
    "command": "cursorLineStartSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至段落结尾",
    "description": "select: line end",
    "command": "cursorLineEndSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至上一页",
    "description": "select: page up",
    "command": "cursorPageUpSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至下一页",
    "description": "select: page down",
    "command": "cursorPageDownSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至文档首",
    "description": "select: top",
    "command": "cursorTopSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选至文档尾",
    "description": "select: bottom",
    "command": "cursorBottomSelect",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择当前词或下一个相同词",
    "description": "select: next find match",
    "command": "editor.action.addSelectionToNextFindMatch",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择所有相同词",
    "description": "select: all same word",
    "command": "editor.action.selectAllSameWord",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 跳过当前选择，选中下一个相同词",
    "description": "select: editor skip select",
    "command": "editor.action.skipSelectionAndSelectNext",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择相同语法词",
    "description": "select: editor select",
    "command": "editor.action.SelectSameWordByLan",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择括号内字符。可用双击括号替代",
    "description": "select: match bracket",
    "command": "editor.action.selectMatchBracket",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择行。可用单击行号替代",
    "description": "select: line selection",
    "command": "expandLineSelection",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 选择行(不含首尾空白字符)",
    "description": "select: select line no blank str",
    "command": "editor.action.selectLineNoBlankStr",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 放大选区",
    "description": "select: expand selection",
    "command": "editor.action.expandSelection",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向2侧扩大选择",
    "description": "select: expand selection two sides",
    "command": "editor.action.expandSelectionTwoSides",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 由2侧向内减少选择",
    "description": "select: narrow selection two sides",
    "command": "editor.action.narrowSelectionTwoSides",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向上列选择",
    "description": "select: insert above",
    "command": "editor.action.insertCursorAbove",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 向下列选择",
    "description": "select: insert below",
    "command": "editor.action.insertCursorBelow",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 每个选区前后设置光标",
    "description": "select: set cursor surround",
    "command": "editor.action.setCursorSurroundSel",
    "type": "hx_command",
    "key": ""
}, {
    "label": "选择: 每行行首设置光标",
    "description": "select: set cursor each line",
    "command": "editor.action.setCursorEachLine",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 查找文件",
    "description": "find:find file",
    "command": "workbench.action.quickOpen",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 查找索引符号",
    "description": "find: quick find",
    "command": "actions.quickFind",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 本文档内查找字符串",
    "description": "find: find string",
    "command": "actions.find",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 目录搜索字符串",
    "description": "find: find file",
    "command": "workbench.action.findInFiles",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 替换",
    "description": "find: find replace",
    "command": "editor.action.startFindReplaceAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 查找下一个字符串",
    "description": "find: find next string",
    "command": "editor.action.nextSelectionMatchFindAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "查找: 查找上一个字符串",
    "description": "find: find previous string",
    "command": "editor.action.previousSelectionMatchFindAction",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向左",
    "description": "goto: cursor left",
    "command": "cursorLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向下",
    "description": "goto: cursor down",
    "command": "cursorDown",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向上",
    "description": "goto: cursor up",
    "command": "cursorUp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向右",
    "description": "goto: cursor right",
    "command": "cursorRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向左一词",
    "description": "goto: cursor word start left",
    "command": "cursorWordStartLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向右一词",
    "description": "goto: cursor word end right",
    "command": "cursorWordEndRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向左一个驼峰单词",
    "description": "goto: cursor word part left",
    "command": "cursorWordPartLeft",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标向右一个驼峰单词",
    "description": "goto: cursor word part right",
    "command": "cursorWordPartRight",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标到软行首",
    "description": "goto: cursor home",
    "command": "cursorHome",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标到软行尾",
    "description": "goto: cursor end",
    "command": "cursorEnd",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标到行首",
    "description": "goto: cursor line start",
    "command": "cursorLineStart",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转: 光标到行尾",
    "description": "goto: cursor line end",
    "command": "cursorLineEnd",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到上个段落",
    "description": "goto: cursor para up",
    "command": "cursorParaUp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到下个段落",
    "description": "goto: cursor para down",
    "command": "cursorParaDown",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到上一页",
    "description": "goto: cursor page up",
    "command": "cursorPageUp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到下一页",
    "description": "goto: cursor page down",
    "command": "cursorPageDown",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到页首",
    "description": "goto: cursor top",
    "command": "cursorTop",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标到页尾",
    "description": "goto: cursor bottom",
    "command": "cursorBottom",
    "type": "hx_command",
    "key": ""
}, {
    "label": "转到定义",
    "description": "goto: definition",
    "command": "workbench.action.gotoDefinition",
    "type": "hx_command",
    "key": ""
}, {
    "label": "分栏转到定义",
    "description": "goto: definition",
    "command": "workbench.action.gotoDefinitionWithPane",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转到行",
    "description": "goto: line",
    "command": "workbench.action.gotoLine",
    "type": "hx_command",
    "key": ""
}, {
    "label": "跳转到配对的括号",
    "description": "goto: jump to bracket",
    "command": "editor.action.jumpToBracket",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标后退",
    "description": "goto: navigate back",
    "command": "workbench.action.navigateBack",
    "type": "hx_command",
    "key": ""
}, {
    "label": "光标前进",
    "description": "goto: navigate forward",
    "command": "workbench.action.navigateForward",
    "type": "hx_command",
    "key": ""
}, {
    "label": "设置/取消书签",
    "description": "goto: toggle bookmark",
    "command": "workbench.action.toggleBookmark",
    "type": "hx_command",
    "key": ""
}, {
    "label": "下一个书签",
    "description": "goto: next bookmark",
    "command": "workbench.action.nextBookmark",
    "type": "hx_command",
    "key": ""
}, {
    "label": "上一个书签",
    "description": "goto: prev bookmark",
    "command": "workbench.action.prevBookmark",
    "type": "hx_command",
    "key": ""
}, {
    "label": "清除所有书签",
    "description": "goto: clear bookmark",
    "command": "workbench.action.clearBookmarks",
    "type": "hx_command",
    "key": ""
}, {
    "label": "下一个验证错误",
    "description": "next error",
    "command": "workbench.action.nextError",
    "type": "hx_command",
    "key": ""
}, {
    "label": "上一个验证错误",
    "description": "prev error",
    "command": "workbench.action.prevError",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 折叠单行",
    "description": "goto: fold line",
    "command": "workbench.action.foldLineContract",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 展开单行",
    "description": "goto: fold line expand",
    "command": "workbench.action.foldLineExpand",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 折叠子行",
    "description": "goto: fold children line",
    "command": "workbench.action.foldChildrenContract",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 展开子行",
    "description": "goto: fold children expand",
    "command": "workbench.action.foldChildrenExpand",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 折叠所有行",
    "description": "goto: fold all",
    "command": "workbench.action.foldAllContract",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 展开所有行",
    "description": "goto: fold all expand",
    "command": "workbench.action.foldAllExpand",
    "type": "hx_command",
    "key": ""
}, {
    "label": "折叠: 折叠其他区域",
    "description": "goto: fold other",
    "command": "workbench.action.foldContractOther",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 置焦到编辑器区域",
    "description": "view: focus editor",
    "command": "workbench.action.focusEditor",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 置焦到项目管理器",
    "description": "view: explorer",
    "command": "workbench.view.explorer",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏项目管理器",
    "description": "view: siderbar",
    "command": "workbench.action.toggleSidebarVisibility",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏控制台",
    "description": "view: repl",
    "command": "workbench.debug.action.toggleRepl",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏终端",
    "description": "view: terminal",
    "command": "workbench.action.tiggleTerminal",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏工具栏",
    "description": "view: toolbar",
    "command": "workbench.action.toggleToolbarVisibility",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏内置浏览器",
    "description": "view: browser",
    "command": "workbench.action.togglePreviewBrowserVisibility",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏迷你地图",
    "description": "view: mini map",
    "command": "editor.action.toggleMinimap",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏大纲",
    "description": "view: outline",
    "command": "editor.action.triggerOutline",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 增大字体",
    "description": "view: zoom in",
    "command": "workbench.action.zoomIn",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 减小字体",
    "description": "view: zoom out",
    "command": "workbench.action.zoomOut",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 免打扰模式",
    "description": "view: freemode",
    "command": "workbench.action.distanceFreeMode",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 单栏",
    "description": "view: pane split 1",
    "command": "workbench.action.split1e",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 左右2栏",
    "description": "view: pane split 2",
    "command": "workbench.action.split2e",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 左右3栏",
    "description": "view: pane split 3",
    "command": "workbench.action.split3e",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 置焦到下一个分栏",
    "description": "view: next pane split",
    "command": "workbench.action.nextpane",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 置焦到上一个分栏",
    "description": "view: prev pane split",
    "command": "workbench.action.prevpane",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 新建HBuilder窗体",
    "description": "view: new window",
    "command": "workbench.action.newWindow",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 最小化",
    "description": "view: window minimize",
    "command": "workbench.action.minimize",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 多窗口切换",
    "description": "view: window switch",
    "command": "workbench.action.switchWindow",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图:切换是否自动换行",
    "description": "view: toggle word wrap",
    "command": "editor.action.toggleWordWrap",
    "type": "hx_command",
    "key": ""
}, {
    "label": "视图: 显示/隐藏空白字符",
    "description": "view: whitespace",
    "command": "editor.action.toggleRenderWhitespace",
    "type": "hx_command",
    "key": ""
}, {
    "label": "运行",
    "description": "run: run",
    "command": "app.action.rundevice",
    "type": "hx_command",
    "key": ""
}, {
    "label": "重新运行",
    "description": "run: debug restart",
    "command": "workbench.action.debug.restart",
    "type": "hx_command",
    "key": ""
}, {
    "label": "停止运行",
    "description": "run: debug stop",
    "command": "workbench.action.debug.stop",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 快捷发行菜单",
    "description": "publish: menus",
    "command": "workbench.action.showPubMenu",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 原生App云打包",
    "description": "publish: app",
    "command": "project.action.app.pack",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 原生App - 查看云打包状态",
    "description": "publish: app status",
    "command": "project.action.app.status",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 原生App - 制作应用wgt包",
    "description": "publish: app wgt",
    "command": "project.action.app.export.wgt.app",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 原生App - 本地打包 - 生成本地打包App资源",
    "description": "publish: app",
    "command": "project.action.app.export.app",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 生成H5网站",
    "description": "publish: uni-app h5",
    "command": "project.action.app.publish.html5",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到微信小程序",
    "description": "publish: uni-app weixin",
    "command": "project.action.app.publish.weapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到百度小程序",
    "description": "publish: uni-app baidu",
    "command": "project.action.app.publish.baiduapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到支付宝小程序",
    "description": "publish: uni-app alipay",
    "command": "project.action.app.publish.alipayapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到字节跳动小程序",
    "description": "publish: uni-app byte",
    "command": "project.action.app.publish.bytedanceapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到QQ小程序",
    "description": "publish: uni-app qq",
    "command": "project.action.app.publish.qqapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 发布到360小程序",
    "description": "publish: uni-app 360",
    "command": "project.action.app.publish.360app",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 快应用 - 华为",
    "description": "publish: uni-app quick huawei",
    "command": "project.action.app.publish.huaweiapp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: uni-app 快应用 - 联盟",
    "description": "publish: uni-app quick",
    "command": "project.action.app.publish.quickappunion",
    "type": "hx_command",
    "key": ""
}, {
    "label": "发行: 上传网站到服务器",
    "description": "publish: uni-app ",
    "command": "project.action.app.publish.statichosting",
    "type": "hx_command",
    "key": ""
}, {
    "label": "文件: 本地历史记录",
    "description": "file: file local history",
    "command": "workbench.action.files.localHistory",
    "type": "hx_command",
    "key": ""
}, {
    "label": "开发者云端控制台",
    "description": "help: open user center",
    "command": "workbench.action.openusercenter",
    "type": "hx_command",
    "key": ""
}, {
    "label": "Markdown语法帮助",
    "description": "help: markdown",
    "command": "workbench.action.openmarkdownhelp",
    "type": "hx_command",
    "key": ""
}, {
    "label": "入门教程",
    "description": "help: open tutorial",
    "command": "workbench.action.openTutorial",
    "type": "hx_command",
    "key": ""
}, {
    "label": "关于",
    "description": "help: about",
    "command": "app.action.quit",
    "type": "hx_command",
    "key": ""
}, {
    "label": "验证本文档语法",
    "description": "tool: validation",
    "command": "editor.action.validation",
    "type": "hx_command",
    "key": ""
}, {
    "label": "设置: 打开设置",
    "description": "tool: set",
    "command": "workbench.action.openGlobalSettings",
    "type": "hx_command",
    "key": ""
}]

const actions = [{
    "label": "打开本地特定路径的文件或目录",
    "description": "action: open path",
    "type": "path"
}, {
    "label": "创建.editorconfig",
    "description": "action: create .editorconfig",
    "type": "standard_create",
    "info": ".editorconfig"
}, {
    "label": "创建.gitignore",
    "description": "action: create .gitignore",
    "type": "standard_create",
    "info": ".gitignore"
}, {
    "label": "创建.eslintrc.js",
    "description": "action: create .eslintrc.js",
    "type": "standard_create",
    "info": ".eslintrc.js"
}, {
    "label": "帮助: DCloud插件市场",
    "description": "action: visit dcloud",
    "type": "url",
    "info": "https://ext.dcloud.net.cn/?cat1=1&cat2=11"
}, {
    "label": "帮助: uni-app官网",
    "description": "action: visit uni-app",
    "type": "url",
    "info": "https://uniapp.dcloud.io/"
}, {
    "label": "帮助: HBuilderX 插件文档",
    "description": "action: visit hx doc",
    "type": "url",
    "info": "https://hx.dcloud.net.cn/"
}, {
    "label": "帮助: DCloud 原生开发者文档",
    "description": "action: visit native",
    "type": "url",
    "info": "https://nativesupport.dcloud.net.cn/"
}, {
    "label": "帮助: 前往Ask论坛发帖",
    "description": "action: visit ask",
    "type": "url",
    "info": "https://ask.dcloud.net.cn/publish/"
}, {
    "label": "Url解码: UrlDecode解码",
    "description": "url decode",
    "type": "codec",
    "info": "UrlDecode"
}, {
    "label": "Url编码: UrlEncode编码",
    "description": "url encode",
    "type": "codec",
    "info": "UrlEncode"
}, {
    "label": "Unicode: 中文转Unicode",
    "description": "chinese to Unicode",
    "type": "codec",
    "info": "ChineseToUnicode"
}, {
    "label": "Unicode: Unicode转中文",
    "description": "Unicode to chinese",
    "type": "codec",
    "info": "UnicodeToChinese"
}]

const svn_git = [{
	"label": "SVN插件: 查看日志",
	"description": "svn log",
	"type": "hx_command",
	"command": "file.showlog"
}, {
	"label": "SVN插件: 提交",
	"description": "svn ci -m ''",
	"type": "hx_command",
	"command": "files.commit"
}, {
	"label": "SVN插件: 比较差异, 与最近一次提交比较",
	"description": "svn diff",
	"type": "hx_command",
	"command": "file.compareWithLastVersion"
}, {
	"label": "Git插件: 查看日志",
	"description": "git log",
	"type": "hx_command",
	"command": "file.showlog"
}, {
	"label": "Git插件: 提交",
	"description": "git commit",
	"type": "hx_command",
	"command": "files.commit"
}, {
	"label": "Git插件: 比较差异, 与最近一次提交比较",
	"description": "git diff",
	"type": "hx_command",
	"command": "file.compareWithLastVersion"
}, {
    "label": "svn命令: svn update",
    "description": "svn update",
    "type": "svn",
    "cmd": "svn update"
},{
    "label": "svn命令: svn log",
    "description": "svn log",
    "type": "svn",
    "cmd": "svn log -l 10 -v"
}, {
    "label": "svn命令: svn cleanup",
    "description": "svn cleanup -Rf .",
    "type": "svn",
    "cmd": "svn clean -Rf ."
}, {
    "label": "Git命令: git pull",
    "description": "git pull",
    "type": "git",
    "cmd": "git pull"
}, {
    "label": "Git命令: git pull --rebase",
    "description": "git pull",
    "type": "git",
    "cmd": "git pull --rebase"
}, {
    "label": "Git命令: git status",
    "description": "git status -s",
    "type": "git",
    "cmd": "git status -s"
}, {
    "label": "Git命令: git log 查看最近10条日志",
    "description": "git log",
    "type": "git",
    "cmd": 'git log -n 10 --graph --pretty=format:"%Cblue%ci - %Cred%h - %C(yellow)%ae%Creset(%an) %Cgreen%s (%Cred%ar)"'
}, {
    "label": "Git命令: 查看配置信息",
    "description": "git config --list",
    "type": "git",
    "cmd": 'git config --list'
}, {
    "label": "Git命令: 查看分支",
    "description": "git branch -a -vv",
    "type": "git",
    "cmd": 'git branch -a -vv'
}, {
    "label": "Git命令: 推送",
    "description": "git push",
    "type": "git",
    "cmd": 'git push'
}, {
    "label": "Git命令: 列出tag",
    "description": "git tag",
    "type": "git",
    "cmd": 'git tag'
}]

module.exports = {
    allCommandList,
    actions,
    svn_git
}
