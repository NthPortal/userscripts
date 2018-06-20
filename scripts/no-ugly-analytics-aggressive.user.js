// ==UserScript==
// @name         No Ugly Analytics (aggressive)
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes `[&?]utm_` and other analytics junk from URLs
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/no-ugly-analytics-aggressive.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/no-ugly-analytics-aggressive.user.js
// @match        http://*/*
// @match        https://*/*
// @run-at       document-start
// ==/UserScript==

if (window.self === window.top
    && (window.location.search.includes('&utm_')
        || window.location.search.startsWith('?utm_'))) {
    // can't force https, cuz we don't know what site it is
    var newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.hash; // drop the search
    if (newURL !== window.location.href) {
        window.location.replace(newURL);
    }
}
