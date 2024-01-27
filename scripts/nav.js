// TODO: optimize (HOW???)

const sections = document.querySelectorAll("div[id]"); // get all page sections

window.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        // Contact section does not highlight properly since it's too short
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        section.addEventListener("click", () => {
            
        })

        if (currentScrollPosition >= sectionTop && currentScrollPosition <= sectionHeight + sectionTop) { // if currently between top and bottom of current section
            document.querySelector(".nav__menu a[href=\"#" + sectionId + "\"]").classList.add("nav__menu-elem_selected"); //activate corresponding nav menu link
        } else {
            document.querySelector(".nav__menu a[href=\"#" + sectionId + "\"]").classList.remove("nav__menu-elem_selected"); // else remove
        }
    });
});

const menuIcon = document.querySelector(".nav__icon");
const navMenu = document.querySelector(".nav__right");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("nav__icon_clicked");
    navMenu.classList.toggle("nav__right_active");
});

const navMenuItems = document.querySelectorAll(".nav__menu a");
navMenuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuIcon.classList.toggle("nav__icon_clicked");
        navMenu.classList.toggle("nav__right_active");
    });
})
