var button = document.getElementById("button");

var settings = document.getElementById("img_setting")
var sub_menu = document.getElementById("sub_menu")
var mainMusic = document.getElementById("mainMusic")
var slider_song1 = document.getElementById("song1")
var img_song1 = document.getElementById("img_unmute1")

var maxScore = document.getElementById("maxScore");

// let maxS = JSON.parse(localStorage.getItem("maxScore"));
// if(maxS!=null){
//     maxScore.textContent="Max Score \n"+ maxS;
// }


slider_song1.value = JSON.parse(localStorage.getItem('sliderVal'))
localStorage.setItem('pre_sliderVal',slider_song1.value)
if(slider_song1.value == 0)
{
    img_song1.setAttribute('src','assets/mute.png')
}
else
{
    img_song1.setAttribute('src','assets/voice.png')
}
// var flag_mute_unmute =1;
mainMusic.autoplay = true
mainMusic.loop = true
button.addEventListener('click', e => {
    
    window.open("index2.html", "_self");

});

settings.addEventListener('click', e => {
    sub_menu.style.display = "block";

});

slider_song1.addEventListener('change', e => {
    var val = e.target.value;
    mainMusic.volume = val/100;
    localStorage.setItem('sliderVal', val)
    if(val == 0)
        {
            img_song1.setAttribute('src','assets/mute.png')
            flag_mute_unmute = 0;
        }
    else
    {
        img_song1.setAttribute('src','assets/voice.png')
        flag_mute_unmute = 1;
    }

});

img_song1.addEventListener('click', e => {
    
    if(JSON.parse(localStorage.getItem('sliderVal')) == 0 && JSON.parse(localStorage.getItem('pre_sliderVal')) !=0)
        {
            img_song1.setAttribute('src','assets/mute.png')
            localStorage.setItem('pre_sliderVal',slider_song1.value)
            localStorage.setItem('sliderVal',0)
            slider_song1.value = 0;
            flag_mute_unmute=0;
        }
    else{
        img_song1.setAttribute('src','assets/voice.png')
        slider_song1.value = JSON.parse(localStorage.getItem('pre_sliderVal'));
        localStorage.setItem('pre_sliderVal',0)
        localStorage.setItem('sliderVal',slider_song1.value)
        flag_mute_unmute = 1;
    }

});