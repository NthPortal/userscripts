// ==UserScript==
// @name         Amazon Smile Redirect
// @namespace    https://nthportal.com
// @author       NthPortal
// @license      Apache License 2.0
// @description  Redirects www.amazon.<domain> URLs to their smile.amazon.<domain> equivalent when logged in
// @version      0.3.1
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/amazon-smile-redirect.user.js
// @match        *://www.amazon.com/*
// @match        *://www.amazon.co.uk/*
// @noframes
// @run-at       document-start
// ==/UserScript==

(function() {
    // localStorage keys
    const prefix = 'com.nthportal:amazon-smile-redirect:loop-check:';
    const loopUrlKey = prefix + 'loop-URL';
    const loopCountKey = prefix + 'loop-count';
    const timestampKey = prefix + 'timestamp';
    const noRedirectKey = prefix + 'no-redirect';

    // thresholds
    const maxLoops = 3;
    const loopTimestampThreshold = 800; // 800 ms
    const noRedirectTimestampThreshold = 1000 * 60 * 60 * 24; // 1 day

    // for sanity
    function int(str) {
        return parseInt(str, 10);
    }

    // per-run values
    const curTimestamp = Date.now(); // ms
    const prevTimestamp = int(getOrElse(timestampKey, 0));
    const timestampDiff = curTimestamp - prevTimestamp;
    const thisUrl = window.location.href;

    // get a localStorage item if set; use the provided value if not
    function getOrElse(key, ifNull) {
        let res = window.localStorage.getItem(key);
        return res === null ? ifNull : res;
    }

    // returns `true` if a loop was detected; `false` otherwise
    function detectLoop() {
        // check for previously detected loop
        if (window.localStorage.getItem(noRedirectKey) !== null) {
            if (timestampDiff > noRedirectTimestampThreshold) {
                // marker is stale - remove
                window.localStorage.removeItem(noRedirectKey);
            } else {
                // a loop was previously detected
                return true;
            }
        }

        // check if we can continue doing loop detection (return `false` if not)
        if (timestampDiff > loopTimestampThreshold) {
            // if last loop check was not recent, clean up localStorage
            window.localStorage.removeItem(loopUrlKey);
            window.localStorage.removeItem(loopCountKey);
            window.localStorage.removeItem(timestampKey);
        } else {
            // check if loop detection is running on a different tab/URL
            let url = window.localStorage.getItem(loopUrlKey);
            if (url === null) {
                // set URL if none is set
                window.localStorage.setItem(loopUrlKey, thisUrl);
            } else if (url != thisUrl) {
                // abort if a different tab/URL is in the middle of checking for loops
                return false;
            }
        }

        // check if we've looped too many times
        let loopCount = int(getOrElse(loopCountKey, 0));
        if (loopCount >= maxLoops) {
            // set marker saying we've looped too many times
            window.localStorage.setItem(noRedirectKey, true);
            return true;
        } else {
            // we haven't looped too many times; increment counter and set timestamp
            window.localStorage.setItem(loopCountKey, loopCount + 1);
            window.localStorage.setItem(timestampKey, Date.now()); // fresh timestamp just in this computation is really slow
            return false;
        }
    }

    if (!detectLoop()) {
        var newHost = window.location.host.replace(/^www\./, 'smile.');
        var newUrl = 'https://' + newHost + window.location.pathname + window.location.search + window.location.hash;
        window.location.replace(newUrl);
    }
})();
