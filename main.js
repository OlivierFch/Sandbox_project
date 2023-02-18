const myCursor = document.querySelector(".cursor");
const logo = document.querySelector(".logo");

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".menu-burger");


const linksMenu = document.querySelectorAll(".menu-Desktop ul li a");

// CURSOR PART
document.addEventListener("mousemove", (e) => {
    let leftPosition = e.clientX + 4;
    let topPosition = e.clientY + 4;

    myCursor.style.left = leftPosition + "px";
    myCursor.style.top = topPosition + "px";
})

// links.forEach(link => {
//     link.addEventListener("mouseenter", () => {
//         myCursor.classList.add("large");
//     })
// })
linksMenu.forEach(link => {
    link.addEventListener("mouseenter", () => {
        myCursor.classList.add("large");
    })
})
logo.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})
sidebarToggle.addEventListener("mouseenter", () => {
    myCursor.classList.add("large");
})

// links.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         myCursor.classList.remove("large");
//     })
// })
linksMenu.forEach(link => {
        link.addEventListener("mouseleave", () => {
            myCursor.classList.remove("large");
        })
    })
logo.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})
sidebarToggle.addEventListener("mouseleave", () => {
    myCursor.classList.remove("large");
})
// END OF CURSOR

// MENU PART
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
})

// END OF MENU