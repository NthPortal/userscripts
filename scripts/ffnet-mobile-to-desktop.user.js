// ==UserScript==
// @name         FFNet Mobile to Desktop
// @namespace    https://princess.lgbt
// @author       Marissa
// @license      Apache License 2.0
// @description  Redirects mobile FFNet to desktop site
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/ffnet-mobile-to-desktop.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/ffnet-mobile-to-desktop.user.js
// @match        *://m.fanfiction.net/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    window.location.replace('https://www.fanfiction.net' + window.location.pathname + window.location.search + window.location.hash);
})();
