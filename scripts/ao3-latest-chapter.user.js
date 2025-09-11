// ==UserScript==
// @name         AO3 Latest Chapter
// @namespace    https://princess.lgbt/
// @author       Marissa
// @license      CC0
// @description  Adds a latest chapter button to the top navigation.
// @version      0.3.3
// @updateURL    https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/ao3-first-latest-chapter-buttons.user.js
// @downloadURL  https://codeberg.org/cuddle_puddle/userscripts/raw/main/scripts/ao3-first-latest-chapter-buttons.user.js
// @match        https://archiveofourown.org/works/*
// @run-at       document-end
// ==/UserScript==

// ==== IMPORTANT ====
// This script has been superseded and will eventually be deleted

(function() {
    const match = location.pathname.match(/^(\/works\/\d+\/chapters\/)\d+/);

    if (match && (document.querySelector('li.chapter.next') !== null)) {
        const chapters = document.getElementById('selected_id').children;
        const lastChapterId = chapters[chapters.length - 1].value;

        const link = document.createElement('a');
        link.appendChild(document.createTextNode('Latest Chapter ' + String.fromCharCode(0x2192) + '|'));
        link.href = match[1] + lastChapterId;

        const buttonParent = document.createElement('li');
        buttonParent.className = 'chapter';
        buttonParent.appendChild(link);

        const chaptersParent = document.getElementById('chapter_index').parentElement;
        chaptersParent.parentElement.insertBefore(buttonParent, chaptersParent);
    }
})();
