// ==UserScript==
// @name         GitHub Safe Close
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Styles the buttons to close issues and PRs on GitHub so they look slightly more intimidating and less like "Cancel" for PR reviews
// @version      0.1.1
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/github-safe-close.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/github-safe-close.user.js
// @match        https://github.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    document.getElementsByName("comment_and_close").forEach(function(elem) {elem.classList.add("btn-danger")})
})();
