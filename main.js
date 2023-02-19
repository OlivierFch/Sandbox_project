const myCursor = document.querySelector(".cursor");
const logo = document.querySelector(".logo");
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".menu-burger");
const linksMenu = document.querySelectorAll(".menu-Desktop ul li a");
const topPage = document.querySelector("#topPage");

const homeSelector = document.getElementById("homeSelector");
const workSelector = document.getElementById("workSelector");
const aboutSelector = document.getElementById("aboutSelector");


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


// MENU SELECTORS HOVER
homeSelector.addEventListener('mouseover', () => {
    sidebar.style.backgroundColor = "#24451d";
    sidebar.style.transition = "all 0.5s ease";
})
homeSelector.addEventListener('mouseleave', () => {
    sidebar.style.backgroundColor = "#161a1d";
})

workSelector.addEventListener('mouseover', () => {
    sidebar.style.backgroundColor = "#452efc";
    sidebar.style.transition = "all 0.5s ease";
})
workSelector.addEventListener('mouseleave', () => {
    sidebar.style.backgroundColor = "#161a1d";
})

aboutSelector.addEventListener('mouseover', () => {
    sidebar.style.backgroundColor = "#a45e21";
    sidebar.style.transition = "all 0.5s ease";
})
aboutSelector.addEventListener('mouseleave', () => {
    sidebar.style.backgroundColor = "#161a1d";
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