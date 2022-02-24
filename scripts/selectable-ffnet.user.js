// ==UserScript==
// @name         Selectable FFNet
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Allows text selection on FanFiction.net
// @version      0.3.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/selectable-ffnet.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/selectable-ffnet.user.js
// @match        *://www.fanfiction.net/s/*/*/*
// @noframes
// @run-at       document-idle
// ==/UserScript==

(function() {
    function allow_text_selection() {
        for (var elem of document.getElementsByClassName('storytextp')) {
            elem.style.removeProperty('user-select');
        }
    }
    window.setTimeout(allow_text_selection, 1000);
})();
