// TODO: optimize (HOW???)

const sections = document.querySelectorAll("div[id]"); // get all page sections

window.addEventListener("scroll", () => {
    let currentScrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        // Contact section does not highlight properly since it's too short
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (currentScrollPosition >= sectionTop && currentScrollPosition <= sectionHeight + sectionTop) { // if currently between top and bottom of current section
            document.querySelector(".nav__menu a[href=\"#" + sectionId + "\"]").classList.add("nav__menu-elem_selected"); //activate corresponding nav menu link
        } else {
            document.querySelector(".nav__menu a[href=\"#" + sectionId + "\"]").classList.remove("nav__menu-elem_selected"); // else remove
        }
    });
});
