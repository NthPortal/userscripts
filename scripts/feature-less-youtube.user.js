// ==UserScript==
// @name         feature-less YouTube
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Removes `&feature=___` from YouTube URLs
// @version      0.2.3
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/feature-less-youtube.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/feature-less-youtube.user.js
// @match        *://www.youtube.com/watch*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    if (window.location.search.includes('&feature=')) {
        var newSearch = window.location.search.replace(/&feature=[^&]*/, '');
        var newURL = 'https://' + window.location.host + window.location.pathname + newSearch + window.location.hash;
        if (newURL !== window.location.href) {
            window.location.replace(newURL);
        }
    }
})();
