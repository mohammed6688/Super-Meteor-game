export default class Music{
    constructor(){
        this.sfxVolume=0.4;
        this.mainVolume=0.4;
        this.mainMusic=new Audio('assets/music.mp3');
        this.sfxMusic=new Audio('assets/music.mp3');
        this.mainMusic.loop=true;

    }

    mainPlay(){
        this.mainMusic.play();
    }

    mainPause(){
        this.mainMusic.pause();
    }

    mainVolumeChange(volume){
        this.mainMusic.volume=volume;
    }

    sfxVolumeChange(volume){
        this.sfxMusic.volume=volume;
    }

    sfxPlay(){
        this.sfxMusic.play();
    }
    
    sfxPause(){
        this.sfxMusic.pause();
    }
    
}