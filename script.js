window.addEventListener("load", () => {
  document.querySelector(".loading").style.display = "none";
  const musics = [
    {
      name: "Delom Band",
      cover: "images/IMG_20240319_180226_204_resize_34.jpg",
      audio: new Audio("./music/audio.mp3"),
    },
    {
      name: "Ensaf Nist",
      cover: "images/hqdefault.jpg",
      audio: new Audio("./music/Soheil Mehrzadegan - Ensaf Nist.mp3"),
    },
    {
      name: "Del Az Man",
      cover: "images/Erfan-Tahmasbi-Del-Az-Man-Music-fa.com_-150x150.jpg",
      audio: new Audio("./music/Erfan Tahmasbi - To (320).mp3"),
    },
  ];
  const musicName = document.querySelector("#music-name");
  const musicCover = document.querySelector("#music-cover");
  const time = document.querySelector("#music-time");
  const prev = document.querySelector("#pre-btn");
  const play = document.querySelector("#play-btn");
  const next = document.querySelector("#next-btn");

  let currenMusic = 0;

  let audio = musics[currenMusic].audio;
  musicCover.src = musics[currenMusic].cover;
  musicName.innerText = musics[currenMusic].name;

  audio.addEventListener("canplay", () => {
    time.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    time.value = audio.currentTime;
    if (audio.currentTime >= audio.duration) {
      audio.pause();
      musicCover.style.animationPlayState = "paused";
      play.classList.replace("fa-pause", "fa-play");
    }
  });

  time.addEventListener("input", () => {
    audio.currentTime = time.value;
  });

  play.addEventListener("click", () => {
    if (audio.paused) {
      musicCover.style.animationPlayState = "running";
      audio.play();
      play.classList.replace("fa-play", "fa-pause");
    } else {
      audio.pause();
      musicCover.style.animationPlayState = "paused";
      play.classList.replace("fa-pause", "fa-play");
    }
  });

  prev.addEventListener("click", () => {
    chaangeMusic("prev");
  });
  next.addEventListener("click", () => {
    chaangeMusic("next");
  });

  function chaangeMusic(state) {
    audio.pause();
    musicCover.style.animationPlayState = "paused";
    play.classList.replace("fa-pause", "fa-play");
    time.value = 0;
    audio.currentTime = time.value;
    if (state === "next") {
      if (currenMusic == musics.length - 1) {
        currenMusic = 0;
      } else {
        currenMusic++;
      }
    } else {
      if (currenMusic == 0) {
        currenMusic = musics.length - 1;
      } else {
        currenMusic--;
      }
    }
    audio = musics[currenMusic].audio;
    musicCover.src = musics[currenMusic].cover;
    musicName.innerText = musics[currenMusic].name;
    audio.addEventListener("canplay", () => {
      time.max = audio.duration;
    });
    audio.addEventListener("timeupdate", () => {
      time.value = audio.currentTime;
    });
    audio.addEventListener("timeupdate", () => {
      time.value = audio.currentTime;
      if (audio.currentTime >= audio.duration) {
        audio.pause();
        musicCover.style.animationPlayState = "paused";
        play.classList.replace("fa-pause", "fa-play");
      }
    });
    setTimeout(() => {
      musicCover.style.animationPlayState = "running";
      audio.play();
      play.classList.replace("fa-play", "fa-pause");
    }, 200);
  }

  let flag = true;

  const switchBtn = document.querySelector("#switch");

  switchBtn.addEventListener("click", (e) => {
    if (flag) {
      flag = false;
      setLight();
      switchBtn.classList.replace("fa-sun", "fa-moon");
    } else {
      flag = true;
      switchBtn.classList.replace("fa-moon", "fa-sun");
      setDark();
    }
  });

  const root = document.querySelector(":root");

  function setDark() {
    root.style.setProperty("--bg-color", "#333");
    root.style.setProperty("--color", "white");
    root.style.setProperty("--time-color", "rgba(255, 255, 255, 0.2)");
  }
  function setLight() {
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--color", "#333");
    root.style.setProperty("--time-color", "rgba(0, 0, 0, 0.2)");
  }
});
