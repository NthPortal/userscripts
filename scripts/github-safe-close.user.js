// ==UserScript==
// @name         GitHub Safe Close
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Styles the buttons to close issues and PRs on GitHub so they look slightly more intimidating and less like "Cancel" for PR reviews
// @version      0.1.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/github-safe-close.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/github-safe-close.user.js
// @match        https://github.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    document.getElementsByName("comment_and_close").forEach(function(elem) {elem.classList.add("btn-danger")})
})();
