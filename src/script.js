var button = document.getElementById("button");
var maxScore = document.getElementById("maxScore");

// let maxS = JSON.parse(localStorage.getItem("maxScore"));
// if(maxS!=null){
//     maxScore.textContent="Max Score \n"+ maxS;
// }

button.addEventListener('click', e => {
    //console.log("clicked");
    window.open("index2.html", "_self");

});
