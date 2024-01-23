let header = document.querySelector('.nav'); // nav menu
header.style.top = `70px`;

let prevPosition = window.scrollY;
let currentPosition = 0;

window.onscroll = () => {
    let currentNavMenuTopPos = Number(header.style.top.replace("px", ""));

    currentPosition = window.scrollY;
    if (currentPosition > prevPosition) { // checking whether user scrolls up or down by comparing current and previous window scroll position
        if (currentNavMenuTopPos <= 0) {
            currentNavMenuTopPos = 0;
            header.style.top = `${currentNavMenuTopPos}px`;
        } else {
            header.style.top = `${currentNavMenuTopPos - (window.scrollY - prevPosition)}px`;
        }
    } else {
        if (currentPosition <= 70) {
            if (currentNavMenuTopPos >= 70) {
                currentNavMenuTopPos = 70;
                header.style.top = `${currentNavMenuTopPos}px`;
            } else {
                header.style.top = `${currentNavMenuTopPos + (prevPosition - window.scrollY)}px`;
            }
        }

        if (currentPosition == 0) {
            currentNavMenuTopPos = 70;
            header.style.top = `${currentNavMenuTopPos}px`;
        }
    }
    prevPosition = currentPosition;
}
