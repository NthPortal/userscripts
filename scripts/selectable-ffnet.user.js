// ==UserScript==
// @name         FFNet Selectable Text
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Allows text selection on FanFiction.net
// @version      0.3.1
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/selectable-ffnet.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/selectable-ffnet.user.js
// @match        *://www.fanfiction.net/s/*
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
