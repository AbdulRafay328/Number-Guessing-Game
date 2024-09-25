var gameSection = document.querySelector(".pbtm");
var Timer = document.querySelector("#timer");
var hitBtn = document.querySelector("#Hitbtn");
var scoreBtn = document.querySelector("#scoreBtn");
var Score = 0;
var score = function () {
    Score += 10;
    scoreBtn.textContent = Score.toString();
};
var boxval = gameSection.addEventListener("click", function (e) {
    var target = e.target;
    if (target.textContent === hitBtn.textContent) {
        score();
    }
    Bubblecreator();
    Hitbtncreator();
});
var Bubblecreator = function () {
    var randomBox = "";
    for (var i = 1; i <= 171; i++) {
        var rn = Math.floor(Math.random() * 10);
        randomBox += "<div class=\"bubble\">".concat(rn, "</div>");
    }
    gameSection.innerHTML = randomBox;
};
var StartHitbtn = function () {
    var timer = 60;
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            Timer.textContent = timer.toString();
        }
        else {
            clearInterval(timerint);
            gameSection.innerText = "Game over";
        }
    }, 1000);
};
var Hitbtncreator = function () {
    var rn = Math.floor(Math.random() * 10);
    hitBtn.innerText = rn.toString();
};
StartHitbtn();
Bubblecreator();
