import '../scss/main.scss';
import $ from 'jquery';

console.log("test");

$('.flip-container').on("mouseenter",()=>{
    console.log('działa');
})


setInterval(()=>{
    const min = 1;
    const max = 8;
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    
    $(`.${random}`).toggleClass('hover');
    setTimeout(()=>{
        $('.flip-container').removeClass('hover');
    },1500)
},4000)

// Look for .hamburger
const hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    const x = document.getElementById("myLinks");
    // if (x.style.display === "none") {
    //     x.style.display = "block";
    // } else {
    //     x.style.display = "none";
    // }
    if (hamburger.classList.contains("is-active")) {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
});