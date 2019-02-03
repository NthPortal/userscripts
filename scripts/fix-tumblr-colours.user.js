// ==UserScript==
// @name         Fix Tumblr Colours
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Use the old Tumblr background colour rather than the garbage new one
// @version      0.2.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/fix-tumblr-colours.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/fix-tumblr-colours.user.js
// @match        *://www.tumblr.com/*
// @run-at       document-body
// ==/UserScript==

(function() {
    function fixStyle() {
        document.body.classList.remove("flag--accessibility-design-update"); // colour for reference #36465D
    }
    function fixRepeatedly(times) {
        fixStyle();
        if (times > 0) setTimeout(() => fixRepeatedly(times - 1), 10);
    }
    fixRepeatedly(10);
})();
