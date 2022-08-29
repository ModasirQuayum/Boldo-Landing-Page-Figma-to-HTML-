const primaryNav = document.querySelector('.primary-navigation');
const toggleNav = document.querySelector('.nav-btn');
const body = document.querySelector('.body');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
toggleNav.addEventListener('click',()=>{
    if(primaryNav.hasAttribute('data-visible')){
        toggleNav.setAttribute('aria-expanded',false);
        document.body.classList.remove('body');
        hamburgerIcon.style.display = 'block';
        closeIcon.toggleAttribute("data-active");
    }
    else{
        toggleNav.setAttribute('aria-expanded',true);
        document.body.classList.add('body');
        hamburgerIcon.style.display = 'none';
        closeIcon.setAttribute('data-active',true);
    }
    primaryNav.toggleAttribute("data-visible")
})

// Slider

const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: false,
    slidesToShow: 1,
    responsive: {
        770: {
            slidesToShow: 2,
        },
        980: {
            slidesToShow: 3,
        },
    }
});


//Accordion

// var acc = document.getElementsByClassName("accordion");
// let accord_up_icon = document.querySelector('.accord-up');
// let accord_down_icon = document.querySelector('.accord-down');


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}