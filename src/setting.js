var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

let level=null;
easy.addEventListener('click', e => {
    // console.log("clicked");
    window.localStorage.setItem("level","easy");
});
medium.addEventListener('click', e => {
    window.localStorage.setItem("level","medum");
});
hard.addEventListener('click', e => {
    window.localStorage.setItem("level","hard");
});