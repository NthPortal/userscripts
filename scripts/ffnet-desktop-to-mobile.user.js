// ==UserScript==
// @name         FFNet Desktop to Mobile
// @namespace    https://princess.lgbt
// @author       Marissa
// @license      Apache License 2.0
// @description  Redirects desktop FFNet to mobile site
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/ffnet-desktop-to-mobile.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/ffnet-desktop-to-mobile.user.js
// @match        *://www.fanfiction.net/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    window.location.replace('https://m.fanfiction.net' + window.location.pathname + window.location.search + window.location.hash);
})();
