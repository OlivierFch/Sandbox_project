const myCursor = document.querySelector(".cursor");
const logo = document.querySelector(".logo");
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".menu-burger");
const linksMenu = document.querySelectorAll(".menu-Desktop ul li a");
const topPage = document.querySelector("#topPage");


// CURSOR PART
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.clientX + 4;
    let topPosition = e.clientY + 4;

    myCursor.style.left = leftPosition + "px";
    myCursor.style.top = topPosition + "px";
})



// LOGO PART
logo.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})
logo.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})



// MENU PART
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
})
sidebarToggle.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})
sidebarToggle.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})

linksMenu.forEach(link => {
    link.addEventListener("mouseenter", () => {
        myCursor.classList.add("large");
    })
})
linksMenu.forEach(link => {
    link.addEventListener("mouseleave", () => {
        myCursor.classList.remove("large");
    })
})


// TOP PAGE
topPage.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
topPage.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})
topPage.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})