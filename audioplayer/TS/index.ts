const wrapper = document.querySelector(".wrapper")as HTMLDivElement;
const wrapper2 = document.querySelector(".wrapper2")as HTMLDivElement;
let musicImg = wrapper.querySelector(".img-area img")as HTMLImageElement ;
let musicName = wrapper.querySelector(".song-details .name")as HTMLParagraphElement;
let musicArtist = wrapper.querySelector(".song-details .artist")as HTMLParagraphElement;
let playPauseBtn = wrapper.querySelector(".play-pause")as HTMLInputElement;
let prevBtn = wrapper.querySelector ("#prev") as HTMLInputElement;
let nextBtn = wrapper.querySelector("#next") as HTMLInputElement;
let mainAudio = wrapper.querySelector("#main-audio") as HTMLAudioElement;
let progressArea = wrapper.querySelector(".progress-area") as HTMLDivElement;
let progressBar = progressArea.querySelector(".progress-bar") as HTMLDivElement;
let moreMusicBtn = wrapper.querySelector("#more-music") as HTMLInputElement;
let musicList = wrapper2.querySelector(".playlist") as HTMLDivElement;
let closemoreMusic = musicList.querySelector("#close") as HTMLInputElement;
const ulTag = wrapper2.querySelector("ul") as HTMLUListElement;



let allMusic = [
    {
      name: "Modern Samurai",
      artist: "FesliyanStudio",
      img: "music-1",
      src: "music-1"
    },
    {
      name: "Chineese New Year",
      artist: "FesliyanStudio",
      img: "music-2",
      src: "music-2"
    },
    {
      name: "Music3",
      artist: "Artist3",
      img: "music-3",
      src: "music-3"
    },
    {
      name: "Music4",
      artist: "Artist4",
      img: "music-4",
      src: "music-4"
    },
    {
      name: "Music5",
      artist: "Artist5",
      img: "music-5",
      src: "music-5"
    },
    {
      name: "Music6",
      artist: "Artist6",
      img: "music-6",
      src: "music-6"
    },
   
  ];


  let musicIndex = 0;
// let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
let isMusicPaused = true;

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
  playingSong(); 
  // rotateAnimation("picture",20);
});

function loadMusic(indexNumb:number){
  musicName.innerText = allMusic[indexNumb - 1].name;
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `thumbnail/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}


function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.innerText = "pause";
    mainAudio.play();
  }

  function pauseMusic(){
    wrapper.classList.remove("paused");
    playPauseBtn.innerText = "play_arrow";
    mainAudio.pause();
  }

  function prevMusic(){
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex--;
    loadMusic(musicIndex);
    playMusic();
     playingSong(); 
  }

  function nextMusic(){
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex++;
    loadMusic(musicIndex);
    playMusic();
    playingSong(); 
  }

  playPauseBtn.addEventListener("click", ()=>{
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
    playingSong();
  });

  prevBtn.addEventListener("click", ()=>{
    prevMusic();
  });
  
  nextBtn.addEventListener("click", ()=>{
    nextMusic();
  });






mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime:any = (e.target as any).currentTime ; 
    const duration:any  = (e.target as any).duration; 
    let progressWidth:Number = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
  
    let musicCurrentTime = wrapper.querySelector(".current-time") as HTMLDivElement;
    let  musicDuration = wrapper.querySelector(".max-duration") as HTMLDivElement;
  
  
  
  
    mainAudio.addEventListener("loadeddata", ()=>{
      
      let mainAdDuration = mainAudio.duration;
      let totalMin:any = Math.floor(mainAdDuration / 60);
      let totalSec:any = Math.floor(mainAdDuration % 60);
      if(totalSec < 10){ 
        totalSec = `0${totalSec}`;
      }
      musicDuration.innerText = `${totalMin}:${totalSec}`;
    });
    
    let currentMin:any = Math.floor(currentTime / 60);
    let currentSec:any = Math.floor(currentTime % 60);
    if(currentSec < 10){ 
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  });


progressArea.addEventListener("click", (e)=>{
  let progressWidth = progressArea.clientWidth; 
  let clickedOffsetX = e.offsetX; 
  let songDuration = mainAudio.duration; 
  
  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic(); 
  playingSong();
});









moreMusicBtn.addEventListener("click", ()=>{
  musicList.classList.toggle("show");
});
closemoreMusic.addEventListener("click", ()=>{
  moreMusicBtn.click();
});





for (let i = 0; i < allMusic.length; i++) {
  
  let liTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  ulTag.insertAdjacentHTML("beforeend", liTag); 

  let liAudioDurationTag :any = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag :any = ulTag.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", ()=>{
    let duration = liAudioTag.duration;
    let totalMin :any = Math.floor(duration / 60);
    let totalSec :any = Math.floor(duration % 60);
    if(totalSec < 10){ 
      totalSec = `0${totalSec}`;
    };
    liAudioDurationTag.innerText = `${totalMin}:${totalSec}`; 
    liAudioDurationTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); 
  });
}







function clicked(element:any){
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex; 
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}



 


  const repeatBtn = wrapper.querySelector("#repeat-plist") as HTMLInputElement;


  repeatBtn.addEventListener("click", ()=>{
  let getText = repeatBtn.innerText; 
  switch(getText){
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Song looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Playback shuffled");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});


mainAudio.addEventListener("ended", ()=>{
  
  let getText = repeatBtn.innerText; 
  switch(getText){
    case "repeat":
      nextMusic();
      break;
    case "repeat_one":
      mainAudio.currentTime = 0; 
      loadMusic(musicIndex); 
      playMusic(); 
      break;
    case "shuffle":
      let randIndex = Math.floor((Math.random() * allMusic.length) + 1); 
      do{
        randIndex = Math.floor((Math.random() * allMusic.length) + 1);
      }while(musicIndex == randIndex); 
      musicIndex = randIndex; 
      loadMusic(musicIndex);
      playMusic();
      playingSong();
      break;
  }
});


function playingSong(){
    const allLiTag: NodeListOf<HTMLLIElement> = ulTag.querySelectorAll("li") ;
    
    for (let j:number = 0; j < allLiTag.length; j++) {
      let audioTag:any = allLiTag[j].querySelector(".audio-duration") ;
      
      if(allLiTag[j].classList.contains("playing")){
        allLiTag[j].classList.remove("playing");
        let adDuration = audioTag.getAttribute("t-duration");
        audioTag.innerText = adDuration;
      }
  
      if(allLiTag[j].getAttribute("li-index") == String(musicIndex)){
        allLiTag[j].classList.add("playing");
        // audioTag.innerText = musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
         audioTag.innerText = "Playing";
      }
      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
  }