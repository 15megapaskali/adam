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

console.log(hamburger);