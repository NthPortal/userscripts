// ==UserScript==
// @name         Clean Etsy URLs
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes unnecessary stuff from the end of Etsy product URLs
// @version      0.3.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/clean-etsy-urls.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/clean-etsy-urls.user.js
// @match        http://www.etsy.com/listing/*/*
// @match        https://www.etsy.com/listing/*/*
// @match        http://www.etsy.com/*/listing/*/*
// @match        https://www.etsy.com/*/listing/*/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    if (window.location.search.startsWith('?ref=')
        || window.location.search.startsWith('?ga_')
        || window.location.search.includes('&ref=')
        || window.location.search.includes('&ga_')) {
        var newSearch = window.location.search.replace(/&ref=[^&]*/, ''); // removes non-leading parameter `ref`
            newSearch = newSearch.replace(/ref=[^&]*&/, '');              // removes a leading parameter `ref` IF there are other parameters after it; this preserves the '?' for them
            newSearch = newSearch.match(/^\?ref=[^&]*/) ? '' : newSearch; // removes a leading parameter `ref` IF there are no other parameters
            newSearch = newSearch.replace(/&ga_[^&=]*=[^&]*/, '');              // removes non-leading parameter `ga_*`
            newSearch = newSearch.replace(/ga_[^&=]*=[^&]*&/, '');              // removes a leading parameter `ga_*` IF there are other parameters after it; this preserves the '?' for them
            newSearch = newSearch.match(/^\?ga_[^&=]*=[^&]*/) ? '' : newSearch; // removes a leading parameter `ga_*` IF there are no other parameters
        var newURL = 'https://' + window.location.host + window.location.pathname + newSearch + window.location.hash;
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
