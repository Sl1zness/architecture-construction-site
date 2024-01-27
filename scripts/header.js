let header = document.querySelector('.nav'); // nav menu
let necessaryTopPos = window.innerWidth > 710 ? 70 : 80;
if (window.innerWidth > 710) {
    necessaryTopPos = 70;
} else if (window.innerWidth > 440 && window.innerWidth <= 710) {
    necessaryTopPos = 80;
} else if (window.innerWidth > 340 && window.innerWidth <= 440) {
    necessaryTopPos = 150;
} else {
    necessaryTopPos = 200;
}

header.style.top = `${necessaryTopPos}px`;

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
        if (currentPosition <= necessaryTopPos) {
            if (currentNavMenuTopPos >= necessaryTopPos) {
                currentNavMenuTopPos = necessaryTopPos;
                header.style.top = `${currentNavMenuTopPos}px`;
            } else {
                header.style.top = `${currentNavMenuTopPos + (prevPosition - window.scrollY)}px`;
            }
        }

        if (currentPosition == 0) {
            currentNavMenuTopPos = necessaryTopPos;
            header.style.top = `${currentNavMenuTopPos}px`;
        }
    }
    prevPosition = currentPosition;
}
