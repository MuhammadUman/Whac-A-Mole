const squareId = document.querySelectorAll(".square");
const moleId = document.querySelector(".mole");
const scoreId = document.getElementById("score");
const timeLeft = document.getElementById("time-left");
let gameActive = true;
let hitPosition;
let result = 0;
let time = 60;

function randomSquare() {
  squareId.forEach((element) => {
    element.classList.remove("mole");
  });
  let randomPosition = squareId[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}
squareId.forEach((element) => {
  element.addEventListener("mousedown", () => {
    if (element.id == hitPosition) {
      result++;
      scoreId.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  if (gameActive) {
    randomSquare();
  }
}

function countDown() {
  time--;
  timeLeft.textContent = time;
  if (time === 0) {
    clearInterval(countDownId);
    clearInterval(moleTimerId);
    alert(`Game Over, Your Result is ${result}`);
    gameActive = false;
  }
}
let countDownId = setInterval(countDown, 1000);
let moleTimerId = setInterval(moveMole, 500);
