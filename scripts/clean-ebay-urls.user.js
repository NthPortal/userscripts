// ==UserScript==
// @name         Clean eBay URLs
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Removes unnecessary stuff from the end of eBay product URLs
// @version      0.1.1
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/clean-ebay-urls.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/clean-ebay-urls.user.js
// @match        https://www.ebay.com/itm/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    if (!window.location.pathname.match(/^\/itm\/[0-9]+/)) {
        var newPath = window.location.pathname.replace(/^\/itm\/[^/]*/, '/itm');
        var newURL = 'https://' + window.location.host + newPath + window.location.hash; // skip search
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
