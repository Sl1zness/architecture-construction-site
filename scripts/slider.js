// TODO: recreate + add pagination click events

let viewport = document.querySelector('.blog__viewport');
let pagination = document.querySelectorAll('.blog__page');
let translatePercentage = 0;
let pageNumber = 0;

pagination[pageNumber].classList.add('blog__page_selected');

setInterval(function() {
    translatePercentage += 100;
    if (translatePercentage > 200) {
        translatePercentage = 0
    }
    pagination[pageNumber].classList.remove('blog__page_selected');
    pageNumber += 1;
    if (pageNumber > 2) {
        pageNumber = 0;
    }
    pagination[pageNumber].classList.add('blog__page_selected');
    viewport.style.transform = `translateX(-${translatePercentage}%)`;
}, 5000);
