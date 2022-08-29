const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navbar.classList.toggle("active");

})
document.querySelectorAll("li").forEach(n => n.
    addEventListener("click", () =>{
        menuIcon.classList.remove("active")
        navbar.classList.remove("active")

    }))


    


    


