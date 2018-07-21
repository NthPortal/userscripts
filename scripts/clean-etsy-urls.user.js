// ==UserScript==
// @name         Clean Etsy URLs
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes unnecessary stuff from the end of Etsy product URLs
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/clean-etsy-urls.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/clean-etsy-urls.user.js
// @match        http://www.etsy.com/listing/*/*
// @match        https://www.etsy.com/listing/*/*
// @run-at       document-start
// ==/UserScript==

(function() {
    if (window.self === window.top
        && (window.location.search.startsWith('?ref=')
            || window.location.search.includes('&ref='))) {
        var newSearch = window.location.search.replace(/&ref=[^&]*/, ''); // removes non-leading parameter
            newSearch = newSearch.replace(/ref=[^&]*&/, '');              //  removes a leading parameter IF there are other parameters after it; this preserves the '?' for them
            newSearch = newSearch.match(/^\?ref=[^&]*/) ? '' : newSearch; // removes a leading parameter IF there are no other parameters
        var newURL = 'https://' + window.location.host + window.location.pathname + newSearch + window.location.hash;
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
