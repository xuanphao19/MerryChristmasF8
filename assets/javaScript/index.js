document.addEventListener("DOMContentLoaded", function (event) {
  ("use strict");
  let container = document.querySelector(".container");
  for (let i = 0; i < 99; i++) {
    let snowSize = Math.floor(Math.random() * 20 + 15);
    let snowTranslate = Math.floor((Math.random() - 0.6) * 700 + 5) + "px";
    let snowEle = document.createElement("div");
    snowEle.classList.add("wrapSnow");
    snowEle.innerHTML = `<div class="snow"></div>`;
    snowEle.style.setProperty("--move", snowTranslate);
    snowEle.style.width = snowSize + "px";
    snowEle.style.height = snowSize + "px";
    snowEle.style.filter = "blur(" + (snowSize % 3) + "px)";
    snowEle.style.top = Math.floor(Math.random() * 250) + "px";
    snowEle.style.animationDuration = Math.floor(Math.random() * 95) + 9 + "s";
    snowEle.style.animationDelay = Math.floor(Math.random() * 2500) + 300 + "ms";
    snowEle.style.left = Math.floor(Math.random() * container.clientWidth) + "px";
    container.appendChild(snowEle);

    let starsEle = document.createElement(`div`);
    let starDelay = Math.floor(Math.random() * 15) + "s";
    starsEle.classList.add("wrapStar");
    starsEle.innerHTML = `<div class="star"></div>`;
    // starsEle.style.filter = "blur(" + Math.floor(Math.random() * 3) + "px)";
    starsEle.style.top = Math.floor(Math.random() * 500) + "px";
    starsEle.style.left = Math.floor(Math.random() * container.clientWidth) + "px";
    let sizeOder = Math.floor(Math.random() * 16) + 1 + "px";
    starsEle.style.setProperty("--starDelay", starDelay);
    starsEle.style.setProperty("--sizeStar", sizeOder);
    starsEle.style.setProperty("--StarWa", Math.floor(Math.random() * 24) + 2 + "px");
    container.appendChild(starsEle);
  }

  let inclSky = document.querySelector(".inclinedSky");
  for (let i = 0; i < 7; i++) {
    let shootingStar = document.createElement(`div`);
    shootingStar.classList.add("shootingStar");
    shootingStar.style.top = Math.floor(Math.random() * 350) + "px";
    shootingStar.style.left = Math.floor(Math.random() * 1400) + "px";
    shootingStar.style.animationDelay = Math.floor(Math.random() * 2500) * 3 + 500 + "ms";
    shootingStar.style.animationDuration = Math.floor(Math.random() * 1500) + 3500 + "ms";
    inclSky.style.setProperty("--longStar", Math.floor(Math.random() * 200) + 80 + "px");
    inclSky.style.setProperty("--skyX", Math.floor(Math.random() * 500) + 700 + "px");
    inclSky.appendChild(shootingStar);
  }
});
