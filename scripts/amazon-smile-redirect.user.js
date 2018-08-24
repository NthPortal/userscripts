// ==UserScript==
// @name         Amazon Smile Redirect
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Redirects www.amazon.<domain> URLs to their smile.amazon.<domain> equivalent
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @match        http://www.amazon.com/*
// @match        https://www.amazon.com/*
// @match        http://www.amazon.co.uk/*
// @match        https://www.amazon.co.uk/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    var newHost = window.location.host.replace(/^www\./, 'smile.');
    var newUrl = 'https://' + newHost + window.location.pathname + window.location.search + window.location.hash;
    window.location.replace(newUrl);
})();
