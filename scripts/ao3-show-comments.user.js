// ==UserScript==
// @name         Show AO3 Comments
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      Apache License 2.0
// @description  Show comments for AO3 works
// @version      0.1.1
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-show-comments.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-show-comments.user.js
// @match        https://archiveofourown.org/works/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const works = ['40787787', // Dreaming of Friends
                   '42303450', // Sisters in All but Blood
                   '43180707', // Family of Nine
                  ];

    function showComments() {
      const url = new URL(window.location.toString());
      if (!url.searchParams.has('show_comments')) {
          url.searchParams.set('show_comments', 'true');
          window.location.replace(url.toString());
      }
    }

    if (window.location.pathname.startsWith('/works/')) {
        const regex = /^\/works\/(\d+)\/.*/g;
        const extract = regex.exec(window.location.pathname);
        if (extract !== null && works.includes(extract[1])) {
            showComments();
        }
    }
})();
