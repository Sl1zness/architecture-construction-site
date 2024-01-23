let navMenu = document.querySelector('.nav'); // nav menu
navMenu.style.top = `70px`;

let prevPosition = window.scrollY;
let currentPosition = 0;

window.onscroll = () => {
    let currentNavMenuTopPos = Number(navMenu.style.top.replace("px", ""));

    currentPosition = window.scrollY;
    if (currentPosition > prevPosition) { // checking whether user scrolls up or down by comparing current and previous window scroll position
        if (currentNavMenuTopPos <= 0) {
            currentNavMenuTopPos = 0;
            navMenu.style.top = `${currentNavMenuTopPos}px`;
        } else {
            navMenu.style.top = `${currentNavMenuTopPos - (window.scrollY - prevPosition)}px`;
        }
    } else {
        if (currentPosition <= 70) {
            if (currentNavMenuTopPos >= 70) {
                currentNavMenuTopPos = 70;
                navMenu.style.top = `${currentNavMenuTopPos}px`;
            } else {
                navMenu.style.top = `${currentNavMenuTopPos + (prevPosition - window.scrollY)}px`;
            }
        }

        if (currentPosition == 0) {
            currentNavMenuTopPos = 70;
            navMenu.style.top = `${currentNavMenuTopPos}px`;
        }
    }
    prevPosition = currentPosition;

    console.log(document.URL);
}
