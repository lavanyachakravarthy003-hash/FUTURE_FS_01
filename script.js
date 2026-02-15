let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener ("click",function() {
    console.log("clicked");
    menuIcon.classList.toggle('fa-xmark');   // changes icon to X
    navbar.classList.toggle('active');       // shows menu
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document
                  .querySelector("header nav a[href*=" + id + "]")
                  .classList.add("active");
            });
        }
    });
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

// Close menu when link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
  });
});
};

