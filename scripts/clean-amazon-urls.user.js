// ==UserScript==
// @name         Clean Amazon URLs
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Removes unnecessary stuff from the end of Amazon product URLs
// @version      0.5.2
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @match        https://www.amazon.com/dp/*
// @match        https://www.amazon.com/*/dp/*
// @match        https://www.amazon.com/gp/product/*
// @match        https://www.amazon.co.uk/dp/*
// @match        https://www.amazon.co.uk/*/dp/*
// @match        https://www.amazon.co.uk/gp/product/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    if (!window.location.pathname.startsWith('/gp/product/handle-buy-box')
        && (window.location.pathname.match(/^(\/[^/]*)?\/dp\/[^/]*(\/ref_?=)?/)
            || window.location.pathname.match(/^\/gp\/product\/[^/]*(\/ref_?=)/)
            || window.location.search.startsWith('?pf_rd')
            || window.location.search.includes('&pf_rd'))) {
        var newPath = window.location.pathname.replace(/\/ref_?=.*$/, '');
            newPath = newPath.replace(/^\/[^/]*\/dp/, '/dp');
            newPath = newPath.replace(/^\/gp\/product/, '/dp');
        var newURL = 'https://' + window.location.host + newPath + window.location.hash; // skip search
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
