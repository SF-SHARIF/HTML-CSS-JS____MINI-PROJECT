
// Element Reference
const togglerBtn = document.getElementById('toggler-btn');
const hamburger_icon = document.getElementById('hamburger-icon');
const ul_div = document.getElementById("nav-ul-div");

togglerBtn.addEventListener ("click" ,function() {
    // humburger icon cross 
    hamburger_icon.classList.toggle('cross');

    // ul div show toggle
    ul_div.classList.toggle('show')
})