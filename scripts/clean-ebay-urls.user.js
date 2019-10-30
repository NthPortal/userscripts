// ==UserScript==
// @name         Clean eBay URLs
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes unnecessary stuff from the end of eBay product URLs
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/clean-ebay-urls.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/clean-ebay-urls.user.js
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
