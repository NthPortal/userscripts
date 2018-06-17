// ==UserScript==
// @name         feature-less YouTube
// @namespace    https://nthportal.com
// @license      Apache License 2.0
// @version      0.1.0
// @description  Removes `&feature=___` from YouTube URLs
// @author       NthPortal
// @match        https://www.youtube.com/watch*
// @run-at document-start
// ==/UserScript==

if (window.self === window.top && window.location.search.includes('&feature=')) {
    var newSearch = window.location.search.replace(/&feature=[^&]*/, '');
    var newURL = 'https://' + window.location.host + window.location.pathname + newSearch + window.location.hash;
    window.location.replace(newURL);
}
