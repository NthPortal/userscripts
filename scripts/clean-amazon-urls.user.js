// ==UserScript==
// @name         Clean Amazon URLs
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes unnecessary stuff from the end of Amazon product URLs
// @version      0.4.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/clean-amazon-urls.user.js
// @match        https://www.amazon.com/dp/*
// @match        https://www.amazon.com/*/dp/*
// @match        https://www.amazon.com/gp/product/*
// @match        https://smile.amazon.com/dp/*
// @match        https://smile.amazon.com/*/dp/*
// @match        https://smile.amazon.com/gp/product/*
// @match        https://www.amazon.co.uk/dp/*
// @match        https://www.amazon.co.uk/*/dp/*
// @match        https://www.amazon.co.uk/gp/product/*
// @match        https://smile.amazon.co.uk/dp/*
// @match        https://smile.amazon.co.uk/*/dp/*
// @match        https://smile.amazon.co.uk/gp/product/*
// @run-at       document-start
// ==/UserScript==

(function() {
    if (window.self === window.top
        && (window.location.pathname.match(/^(\/[^/]*)?\/dp\/[^/]*\/ref=/)
            || window.location.pathname.match(/^\/gp\/product\/[^/]*\/ref=/)
            || window.location.search.startsWith('?pf_rd')
            || window.location.search.includes('&pf_rd'))) {
        var newPath = window.location.pathname.replace(/\/ref=.*$/, '');
            newPath = newPath.replace(/^\/[^/]*\/dp/, '/dp');
            newPath = newPath.replace(/^\/gp\/product/, '/dp');
        var newURL = 'https://' + window.location.host + newPath + window.location.hash; // skip search
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
