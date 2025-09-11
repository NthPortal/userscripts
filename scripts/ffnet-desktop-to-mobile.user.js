// ==UserScript==
// @name         FFNet Desktop to Mobile
// @namespace    https://princess.lgbt
// @author       Marissa
// @license      CC0
// @description  Redirects desktop FFNet to mobile site
// @version      0.1.1
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/ffnet-desktop-to-mobile.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/ffnet-desktop-to-mobile.user.js
// @match        *://www.fanfiction.net/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    window.location.replace('https://m.fanfiction.net' + window.location.pathname + window.location.search + window.location.hash);
})();
