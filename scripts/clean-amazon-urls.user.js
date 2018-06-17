// ==UserScript==
// @name         Clean Amazon URLs
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes unnecessary stuff from the end of Amazon product URLs
// @version      0.1.1
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @match        http://www.amazon.com/*
// @match        https://www.amazon.com/*
// @match        http://smile.amazon.com/*
// @match        https://smile.amazon.com/*
// @run-at       document-start
// ==/UserScript==

if (window.self === window.top && window.location.pathname.match(/\/[^/]*\/dp\/[^/]*\/ref=/)) {
    var newPath = window.location.pathname.replace(/\/ref=.*$/, '');
    var newURL = 'https://' + window.location.host + newPath;
    window.location.replace(newURL);
}
