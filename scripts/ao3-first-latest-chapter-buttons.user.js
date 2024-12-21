// ==UserScript==
// @name         AO3 First and Latest Chapter Buttons
// @namespace    princess.lgbt
// @author       Marissa
// @license      Apache License 2.0
// @description  Adds buttons for the first and latest chapters to the top navigation.
// @version      0.4.0
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-first-latest-chapter-buttons.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-first-latest-chapter-buttons.user.js
// @match        https://archiveofourown.org/works/*
// @run-at       document-end
// ==/UserScript==

(function() {
    const match = location.pathname.match(/^(\/works\/\d+\/chapters\/)\d+/);

    function createButton(chapterId, text) {
        const link = document.createElement('a');
        link.appendChild(document.createTextNode(text));
        link.href = match[1] + chapterId;

        const button = document.createElement('li');
        button.className = 'chapter';
        button.appendChild(link);
        return button;
    }

    if (match) {
        // if this is used in one of the `if` blocks, then it's guaranteed to exist
        const chapters = document.getElementById('selected_id').children;

        const nextChapter = document.querySelector('li.chapter.next');
        if (nextChapter !== null) {
            const lastButton = createButton(chapters[chapters.length - 1].value, String.fromCharCode(0x2192) + '|');
            nextChapter.parentElement.insertBefore(lastButton, nextChapter.nextSibling);
        }

        const previousChapter = document.querySelector('li.chapter.previous');
        if (previousChapter !== null) {
            const firstButton = createButton(chapters[0].value, '|' + String.fromCharCode(0x2190));
            previousChapter.parentElement.insertBefore(firstButton, previousChapter);
        }
    }
})();
