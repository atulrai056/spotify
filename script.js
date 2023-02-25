// initialize the variables
let songIndex=0;
let audioElement = new Audio('path/Elevated.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songs=[
    {songName :"Eleveted",filePath:"Elevated.mp3",coverPath:"pathCover\maxresdefault.jpg"},
    {songName :"Ram Ram",filePath:"Ram Ram(PagalWorld.com.se).mp3",coverPath:"pathCover\maxresdefault.jpg"},
    {songName :"Worth Noting",filePath:"Worth Nothing New Tiktok Trending Song Download 2022(DjJpSwami.Com).mp3",coverPath:"pathCover\maxresdefault.jpg"},
    {songName :"Tera Mera Safar",filePath:"Tera-Mera-Safar(PagalWorldl).mp3",coverPath:"pathCover\maxresdefault.jpg"},
    {songName :"Haraya ale chore",filePath:"Chora Haryane Aala - Eshan Bhati, Sunny Andy Chora(MixJio.In).mp3",coverPath:"pathCover\maxresdefault.jpg"},
     
]
//audioElement.play();

// handle play/pause click 
masterPlay.addEventListener('click',()=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
       gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause'); 
        gif.style.opacity=0;
    }
})

//listen to event 
audioElement.addEventListener('timeupdate',()=>{
   // update seekebar
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
   myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause'); 
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       // console.log("show click");
        makeAllPlays();
        songIndex = parseInt(e.target.id);
       // console.log(songIndex);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause'); 
        //console.log(songs[songIndex].filePath);
        audioElement.src="path/"+songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause'); 
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src="path/"+songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src="path/"+songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

