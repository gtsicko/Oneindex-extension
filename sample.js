// ==UserScript==
// @name         Oneindex-extension
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  添加调用本地视频播放器按钮到视频文件中
// @author       Sicko
// @include      *you.host*
// @grant        none
// ==/UserScript==

(function() {
    //potplayer的url schema前缀
    var url_schema = "potplayer://";

    //获取下载按钮的元素
    var dl = document.getElementsByClassName('mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent')[0];
    //获取下载按钮元素的下载链接
    var url_dl = dl.getAttribute("href");
    //拼接获得调用本地播放器的url schema连接
    var url_play = url_schema + url_dl;

    //获取父节点
    var parent = dl.parentNode;
    //删除原来的下载按钮
    parent.removeChild(dl);

    //创建漂浮按钮的div
    var newDiv = document.createElement('div');
    newDiv.setAttribute("class","mdui-fab-wrapper");
    newDiv.setAttribute("mdui-fab", "{trigger: 'hover'}");

    //浮动按钮
    var play = document.createElement('a');
    play.setAttribute("href", url_play);
    play.setAttribute("title", '播放');
    play.setAttribute("class","mdui-fab mdui-ripple mdui-color-pink");

    //浮动按钮默认图标
    var icon_default = document.createElement('i');
    icon_default.setAttribute("class", "mdui-icon material-icons");
    icon_default.innerHTML = "add";

    //播放图标
    var icon_open = document.createElement('i');
    icon_open.setAttribute("class", "mdui-icon mdui-fab-opened material-icons");
    icon_open.innerHTML = "play_arrow";

    //添加图标到按钮
    play.appendChild(icon_default);
    play.appendChild(icon_open);

    //图标列表div的配置
    var div_icons = document.createElement("div");
    div_icons.setAttribute("class", "mdui-fab-dial");

    //下载按钮配置
    var button_dl = document.createElement('a');
    button_dl.setAttribute("href", button_dl);
    button_dl.setAttribute("title", "下载");
    button_dl.setAttribute("class","mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue");

    //下载按钮图标配置
    var icon_dl = document.createElement('i');
    icon_dl.setAttribute("class", "mdui-icon mdui-fab-opened material-icons");
    icon_dl.innerHTML = "file_download";

    //添加图标到下载按钮
    button_dl.appendChild(icon_dl);
    //添加下载按钮到图标列表
    div_icons.appendChild(button_dl);

    //添加浮动播放按钮和图标菜单到主div中
    newDiv.appendChild(play);
    newDiv.appendChild(div_icons);

    //添加主div到父节点
    parent.appendChild(newDiv);
})();
