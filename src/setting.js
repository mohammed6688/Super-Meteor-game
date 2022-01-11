var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

let level=null;
easy.addEventListener('click', e => {
    //put code here
    // console.log("clicked");
    window.localStorage.setItem("level","easy");
});
medium.addEventListener('click', e => {
    //put code here
    window.localStorage.setItem("level","medium");
});
hard.addEventListener('click', e => {
    //put code here
    window.localStorage.setItem("level","hard");
});