let allSections = [
    document.querySelector("header"),
    ...document.querySelectorAll("section"),
];


let sidebarItems = document.querySelectorAll(".sidebar-menu li");

function setActive(element) {
    sidebarItems.forEach((item) => item.classList.remove("active"));

    element.classList.add("active");
}

function changeActiveMenu() {
    let fromTop = window.scrollY;

    sidebarItems.forEach((item) => {
        let link = item.querySelector("a");
        let dot = item.querySelector(".dot");
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            item.classList.add("active");
            dot.classList.add("active");
        } else {
            item.classList.remove("active");
            dot.classList.remove("active");
        }
    });
}

sidebarItems.forEach((item) => {
    item.addEventListener("click", () => setActive(item));
});

window.addEventListener("scroll",changeActiveMenu);


