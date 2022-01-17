// ==UserScript==
// @name         Selectable FFnet
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Allows text selection on FanFiction.net
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/selectable-ffnet.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/selectable-ffnet.user.js
// @match        *://www.fanfiction.net*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    for (var elem of document.getElementsByClassName('storytextp')) {
        elem.style.removeProperty('user-select')
    }
})();
