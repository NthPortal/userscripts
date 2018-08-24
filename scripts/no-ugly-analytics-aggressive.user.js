// ==UserScript==
// @name         No Ugly Analytics (aggressive)
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes `[&?]utm_` and other analytics junk from URLs
// @version      0.3.1
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/no-ugly-analytics-aggressive.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/no-ugly-analytics-aggressive.user.js
// @match        http://*/*
// @match        https://*/*
// @noframes
// @run-at       document-start
// ==/UserScript==

/*******************************************************\
 *                       WARNING                       *
 *                       =======                       *
 * This script is very aggressive and may rewrite URLs *
 * that you don't want it to. Use it at your own risk. *
\*******************************************************/
(function() {
    if (window.location.search.includes('&utm_')
        || window.location.search.startsWith('?utm_')) {
        // Fix search
        var newSearch = window.location.search.replace(/&utm_[^&=]*=[^&]*/g, ''); // removes all but a leading parameter
            newSearch = newSearch.replace(/utm_[^&=]*=[^&]*&/, '');               //  removes a leading parameter IF there are other parameters after it; this preserves the '?' for them
            newSearch = newSearch.match(/^\?utm_[^&=]*=[^&]*/) ? '' : newSearch;  // removes a leading parameter IF there are no other parameters
        // can't force https, cuz we don't know what site it is
        var newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + newSearch + window.location.hash;
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
