// ==UserScript==
// @name         Amazon Smile Redirect
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Redirects www.amazon.<domain> URLs to their smile.amazon.<domain> equivalent when logged in
// @version      0.2.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @match        *://www.amazon.com/*
// @match        *://www.amazon.co.uk/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    // the Local Storage item 'amznfbgid' seems to only be set if we're logged in
    if (window.localStorage.getItem("amznfbgid") !== null) {
        var newHost = window.location.host.replace(/^www\./, 'smile.');
        var newUrl = 'https://' + newHost + window.location.pathname + window.location.search + window.location.hash;
        window.location.replace(newUrl);
    }
})();
