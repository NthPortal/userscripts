// ==UserScript==
// @name         Chrome Disable Most Visited
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Removes the Most Visited tiles from the Chrome "New Tab" page
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/chrome-disable-most-visited.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/chrome-disable-most-visited.user.js
// @match        http://www.google.com/_/chrome/newtab*
// @match        https://www.google.com/_/chrome/newtab*
// @run-at       document-start
// ==/UserScript==

(function() {
    if (window.self === window.top) {
        document.getElementById("most-visited").style.display = 'none';
    }
})();
