// ==UserScript==
// @name         feature-less YouTube
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes `&feature=___` from YouTube URLs
// @version      0.1.3
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/feature-less-youtube.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/feature-less-youtube.user.js
// @match        http://www.youtube.com/watch*
// @match        https://www.youtube.com/watch*
// @run-at       document-start
// ==/UserScript==

if (window.self === window.top
    && (window.location.search.includes('&feature=')
        || window.location.search.startsWith('?feature='))) {
    var newSearch = window.location.search.replace(/&feature=[^&]*/, '');
    var newURL = 'https://' + window.location.host + window.location.pathname + newSearch + window.location.hash;
    if (newURL !== window.location.href) {
        window.location.replace(newURL);
    }
}
