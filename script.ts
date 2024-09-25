const gameSection = document.querySelector(".pbtm") as HTMLElement;
const Timer = document.querySelector("#timer") as HTMLElement;
let hitBtn = document.querySelector("#Hitbtn") as HTMLElement;
let scoreBtn = document.querySelector("#scoreBtn") as HTMLElement;

let Score = 0;
const score = () => {
  Score += 10;
  scoreBtn.textContent = Score.toString();
};

let boxval = gameSection.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.textContent === hitBtn.textContent) {
    score();
  }
  Bubblecreator();
  Hitbtncreator();
});

const Bubblecreator = () => {
  let randomBox = "";
  for (let i = 1; i <= 171; i++) {
    let rn = Math.floor(Math.random() * 10);
    randomBox += `<div class="bubble">${rn}</div>`;
  }

  gameSection.innerHTML = randomBox;
};

const StartHitbtn = () => {
  let timer = 60;

  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      Timer.textContent = timer.toString();
    } else {
      clearInterval(timerint);
      gameSection.innerText = "Game over";
    }
  }, 1000);
};

const Hitbtncreator = () => {
  const rn = Math.floor(Math.random() * 10);
  hitBtn.innerText = rn.toString();
};

StartHitbtn();

Bubblecreator();
