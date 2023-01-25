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

/* 11111111111111111111111111111111111111111111 */
document.addEventListener("DOMContentLoaded", function (event) {
  let c = document.querySelector("canvas");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  let mouseIn = false;
  let pen = c.getContext("2d");
  let mouseCoord = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  let circleArr = [];
  window.addEventListener("mousedown", (e) => {
    mouseCoord.x = e.x;
    mouseCoord.y = e.y;
    mouseIn = true;
  });
  window.addEventListener("mouseup", (e) => {
    mouseIn = false;
  });
  function Circle(x, y, r, alp, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.d = r;
    this.h = r;
    this.alp = alp;
    this.ttl = 100;
    // this.color = colors[Math.floor(Math.random() * colors.length)];
    this.draw = function () {
      // pen.beginPath();
      // pen.fillStyle = this.color;
      // pen.arc(this.x, this.y, this.r, 0, Math.PI * 2);

      // pen.fillStyle = "rgba(0,0,0,0.8)";
      // pen.fillRect(0, 0, c.width, c.height);

      // pen.shadowBlur = 5; Nặng máy!
      // pen.shadowColor = "red";

      var img = document.getElementById("bubbles");
      pen.drawImage(img, this.x, this.y, this.d, this.h);

      pen.fill();
      pen.closePath();
      pen.globalAlpha = this.alp;
    };

    this.update = function () {
      this.x = this.x + dx;
      this.y = this.y + dy;
      this.ttl -= 1;
      let setCoordX = mouseCoord.x - this.x;
      let setCoordY = mouseCoord.y - this.y;
      // Quyết định phạm vi di chuyển và độ lớn dần của vật
      if (setCoordX < 800 && setCoordX > -800 && setCoordY < 510 && setCoordY > -510) {
        this.d += 3;
        this.h += 3;
        if (this.r < 5) {
          this.r += 1;
        }
      } else {
        if (this.r > 0) {
          this.r -= 1;
          this.d -= 2;
          this.h -= 2;
        }
        if (this.alp > 0) {
          this.alp = alp - 0.3;
        }
      }

      this.draw();
    };
  }

  function drawFireworks() {
    requestAnimationFrame(drawFireworks);
    pen.clearRect(0, 0, c.width, c.height);
    if (mouseIn) {
      let x = mouseCoord.x;
      let y = mouseCoord.y;
      let alp = 1;

      for (let i = 0; i < 5; i++) {
        let r = Math.random() * 3;
        //dx dy quyết định tốc độ, hướng di chuyển
        let dx = (Math.random() - 0.5) * 55;
        let dy = (Math.random() - 0.8) * 35;
        circleArr.push(new Circle(x, y, r, alp, dx, dy));
      }

      for (let i = 0; i < circleArr.length; i++) {
        if (circleArr[i].r <= 0) {
          circleArr.splice(0, 1);
        }
        if (circleArr[i].d <= 0) {
          circleArr.splice(0, 1);
        }
        if (circleArr[i].h <= 0) {
          circleArr.splice(0, 1);
        }

        console.log(circleArr[i].ttl);
        if (circleArr[i].ttl === 70) {
          circleArr.splice(0, 1);
        }
        circleArr[i].update();
      }
    }
  }
  drawFireworks();
});
