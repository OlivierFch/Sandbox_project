const myCursor = document.querySelector(".cursor");
const menuBurger = document.querySelector(".menu-burger");
const logo = document.querySelector(".logo");

const links = document.querySelectorAll("nav ul li a");

// CURSOR PART
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    myCursor.style.left = leftPosition + "px";
    myCursor.style.top = topPosition + "px";
})

// links.forEach(link => {
//     link.addEventListener("mouseenter", () => {
//         myCursor.classList.add("large");
//     })
// })
logo.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})
menuBurger.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})

// links.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         myCursor.classList.remove("large");
//     })
// })
logo.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})
menuBurger.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})
// END OF CURSOR

// MENU PART
menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("menu");
})
// END OF MENU