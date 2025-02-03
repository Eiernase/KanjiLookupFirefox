var JsDictBody = document.getElementById('JsDictBody');
const observer = new MutationObserver(() => {
    if (document.getElementsByClassName('dict-panel')[0] == undefined) {
        return;
    };
    updateDictionary();
    observer.disconnect();
    const observer2 = new MutationObserver(() => {
        var noResults = document.getElementsByClassName('p-4 leading-tight')[1];
        //check if the "No common words found" panel exists, if yes remove it
        if (noResults != undefined) {
            noResults.remove();
            observer2.disconnect();
        }
    });
    observer2.observe(JsDictBody, { childList: true, subtree: true});
});
observer.observe(JsDictBody, { childList: true, subtree: true });
//});

function updateDictionary() {
    console.log('updating dictionary');
    var kanji = document.getElementsByClassName('kanji')[0].children[0].innerHTML;
    var dictPanel = document.getElementsByClassName('dict-panel')[0];
    var noResults = document.getElementsByClassName('p-4 leading-tight')[0];

    //check if the "No common words found" panel exists, if yes remove it (it will be generated again)
    if (noResults != undefined) {
        noResults.remove();
    }

    //create content elements
    var linkPanel = document.createElement('div');
    var linkPanelParagraph = document.createElement('p');
    var linkPanelUl = document.createElement('ul');
    var linkPanelUlLi = document.createElement('li');
    var linkPanelUlLi1 = document.createElement('li');
    var linkPanelUlLi2 = document.createElement('li');
    var linkPanelUlLi3 = document.createElement('li');
    var linkPanelUlLiSearchSpan = document.createElement('span');
    var linkPanelUlLiSearchSpan2 = document.createElement('span');
    var linkPanelUlLiSearchSpan3 = document.createElement('span');
    var linkPanelUlLiArrowSpan = document.createElement('span');
    var linkPanelUlLiJishoLink = document.createElement('a');
    var linkPanelUlLiJpdbLink = document.createElement('a');
    var linkPanelUlLiWiktionaryLink = document.createElement('a');
    var linkPanelUlLiLearnMore = document.createElement('a');

    //set attributes
    linkPanel.setAttribute('class', 'p-4 leading-tight');
    linkPanelParagraph.setAttribute('class', 'mb-4');
    linkPanelUl.setAttribute('class', 'fa-ul mb-0');
    linkPanelUlLi.setAttribute('class', 'mb-4');
    linkPanelUlLi1.setAttribute('class', 'mb-4');
    linkPanelUlLi2.setAttribute('class', 'mb-4');
    linkPanelUlLi3.setAttribute('class', 'mb-4');
    linkPanelUlLiSearchSpan.setAttribute('class', 'fa-li');
    linkPanelUlLiSearchSpan.innerHTML = '<i class="fas fa-search"></i>';
    linkPanelUlLiSearchSpan2.setAttribute('class', 'fa-li');
    linkPanelUlLiSearchSpan2.innerHTML = '<i class="fas fa-search"></i>';
    linkPanelUlLiSearchSpan3.setAttribute('class', 'fa-li');
    linkPanelUlLiSearchSpan3.innerHTML = '<i class="fas fa-search"></i>';
    linkPanelUlLiArrowSpan.setAttribute('class', 'fa-li');
    linkPanelUlLiArrowSpan.innerHTML = '<i class="fas fa-arrow-right"></i>';

    //jisho link
    linkPanelUlLiJishoLink.setAttribute('class', 'no-underline hover:underline');
    linkPanelUlLiJishoLink.setAttribute('href', 'https://jisho.org/search/' + kanji);
    linkPanelUlLiJishoLink.setAttribute('target', 'blank');
    linkPanelUlLiJishoLink.innerHTML = 'Search words using ' + kanji + ' on <strong>jisho.org</strong>';

    //jpdb link
    linkPanelUlLiJpdbLink.setAttribute('class', 'no-underline hover:underline');
    linkPanelUlLiJpdbLink.setAttribute('href', 'https://jpdb.io/search?q=' + kanji);
    linkPanelUlLiJpdbLink.setAttribute('target', 'blank');
    linkPanelUlLiJpdbLink.innerHTML = 'Search words using ' + kanji + ' on <strong>jpdb.io</strong>';

    //wiktionary link
    linkPanelUlLiWiktionaryLink.setAttribute('class', 'no-underline hover:underline');
    linkPanelUlLiWiktionaryLink.setAttribute('href', 'https://en.wiktionary.org/wiki/' + kanji);
    linkPanelUlLiWiktionaryLink.setAttribute('target', 'blank');
    linkPanelUlLiWiktionaryLink.innerHTML = 'Search words using ' + kanji + ' on <strong>Wiktionary</strong>';

    //learn more link
    linkPanelUlLiLearnMore.setAttribute('class', 'no-underline hover:underline');
    linkPanelUlLiLearnMore.setAttribute('href', '/learnmore#dictionary-sources' + kanji);
    linkPanelUlLiLearnMore.setAttribute('target', 'blank');
    linkPanelUlLiLearnMore.innerHTML = 'Learn more about Kanji Koohii\'s builtin dictionary';

    //paragraph
    linkPanelParagraph.innerHTML = 'More resources for this kanji';

    //generate panel
    linkPanel.appendChild(linkPanelParagraph);
    linkPanelUlLi1.appendChild(linkPanelUlLiSearchSpan);
    linkPanelUlLi1.appendChild(linkPanelUlLiJishoLink);
    linkPanelUl.appendChild(linkPanelUlLi1);
    linkPanelUlLi2.appendChild(linkPanelUlLiSearchSpan2);
    linkPanelUlLi2.appendChild(linkPanelUlLiJpdbLink);
    linkPanelUl.appendChild(linkPanelUlLi2);
    linkPanelUlLi3.appendChild(linkPanelUlLiSearchSpan3);
    linkPanelUlLi3.appendChild(linkPanelUlLiWiktionaryLink);
    linkPanelUl.appendChild(linkPanelUlLi3);
    linkPanelUlLi.appendChild(linkPanelUlLiArrowSpan);
    linkPanelUlLi.appendChild(linkPanelUlLiLearnMore);
    linkPanelUl.appendChild(linkPanelUlLi);
    linkPanel.appendChild(linkPanelUl);
    dictPanel.insertAdjacentElement('afterbegin', linkPanel);
}