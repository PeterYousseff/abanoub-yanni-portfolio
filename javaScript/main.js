// navbar
// navbar transition in scrolling
function changeBg() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    navbar.classList.remove("bgColor");
  } else {
    navbar.classList.add("bgColor");
  }
}
window.addEventListener("scroll", changeBg);

// =========================================================
// =========================== navbar ======================
// =========================================================
// Function to toggle the menu
function toggleMenu() {
  const other = document.getElementById("other");
  other.classList.toggle("removeMenu");
}
// Function to close the menu when clicking outside
function closeMenuOnClickOutside(event) {
  const dropdownMenu = document.querySelector(".other");
  if (!event.target.closest(".down")) {
    dropdownMenu.classList.add("removeMenu");
  }
}
// Attach event listeners
document.getElementById("aMenu").addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnClickOutside);
// =========================================================
// =========================================================
// close and open the menu in responsive design
let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".menu");

// Toggle menu visibility on toggler click
toggler.onclick = function () {
  menu.classList.toggle("visibleNavMenu");
};

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !toggler.contains(event.target)) {
    menu.classList.add("visibleNavMenu");
  }
});

// Get all the links inside the menu
const links = menu.getElementsByClassName("target");

// Function to close the menu
function closeMenu() {
  // menu.style.display = 'none'; // Hide the menu
  menu.classList.add("visibleNavMenu");
}

// Add click event listeners to each link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", closeMenu);
}

// =========================================================
// =========================== navbar ======================
// =========================================================
// navbar



// visible scroll to top
function visibleScrollToTop() {
  let scrollToTop = document.getElementById("scroll-to-top");
  let scrollValue = window.scrollY;
  if (scrollValue > 500) {
    scrollToTop.classList.remove("visible-scroll-to-top");
  } else {
    scrollToTop.classList.add("visible-scroll-to-top");
  }
}
window.addEventListener("scroll", visibleScrollToTop);





















const header = document.querySelector('.heade');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=1604) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}


const typedelemnt = document.querySelector('.typed');


const typed = new Typed (typedelemnt,{
    strings:
    [
        'compose music',
        'write songs',
        'am conductor',
        'am content creator',
        'am vocal and piano coach',
        'am yanni'
    ],
    typeSpeed:100,
    backSpeed:100,
    loop: true,
  loopCount: Infinity,
})


const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dlarnctcb',
  api_key: '977722613183722',
  api_secret: 'YOUR_API_SECRET',
  secure: true,
});

cloudinary.v2.api
  .resource_by_asset_id('4c72efcb3b26695b866eb534b42e6800')
  .then(console.log)