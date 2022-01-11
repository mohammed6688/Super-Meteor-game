var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

let level=null;
easy.addEventListener('click', e => {
    //put code her
    window.localStorage.setItem("level",0);
    window.open("index2.html", "_self");
});
medium.addEventListener('click', e => {
    //put code here
    //window.localStorage.setItem("level","medium");
    window.localStorage.setItem("level",1);
    window.open("index2.html", "_self");
});
hard.addEventListener('click', e => {
    //put code here
    window.localStorage.setItem("level",2);
    window.open("index2.html", "_self");
});