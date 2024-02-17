// ==UserScript==
// @name         AO3 Latest Chapter
// @namespace    princess.lgbt
// @author       Marissa
// @license      Apache License 2.0
// @description  Adds a latest chapter button to the top navigation.
// @version      0.2.7
// @updateURL    https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-latest-chapter.user.js
// @downloadURL  https://github.com/NthPortal/userscripts/raw/master/scripts/ao3-latest-chapter.user.js
// @match        https://archiveofourown.org/*
// @run-at       document-end
// ==/UserScript==

(function() {
    const match = location.pathname.match(/^(\/works\/\d+\/chapters\/)\d+/);

    if (match) {
        const link = document.createElement('a');
        link.style.pointerEvents = 'none';
        link.appendChild(document.createTextNode('Latest Chapter ' + String.fromCharCode(0x2192) + '|'));

        const buttonParent = document.createElement('li');
        buttonParent.className = 'chapter';
        buttonParent.ariaDisabled = true;
        buttonParent.style.cursor = 'not-allowed';
        buttonParent.appendChild(link);

        const chaptersParent = document.getElementById('chapter_index').parentElement;
        chaptersParent.parentElement.insertBefore(buttonParent, chaptersParent);

        function maybe_update_button() {
            const chapters = document.getElementById('selected_id').children;
            const lastChapter = chapters[chapters.length-1];
            if (!lastChapter.selected) {
                const lastChapterId = lastChapter.value;
                link.href = match[1] + lastChapterId;
                link.style.pointerEvents = 'auto';
                buttonParent.ariaDisabled = false;
                buttonParent.style.cursor = 'auto';
            }

        }
        window.setTimeout(maybe_update_button, 1000);
    }
})();
