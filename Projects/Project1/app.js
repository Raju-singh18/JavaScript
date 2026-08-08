let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number");
  } else if (guess === secretNo) {
    displayMessage("Correct number");
    document.querySelector(".number").textContent = secretNo;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNo) {
    if (score > 1) {
      displayMessage(guess > secretNo ? "Too high" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score === highscore) {
    displayMessage("Start Guessing");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".highscore").textContent = 0;
    document.querySelector(".score").textContent = 20;
  } else {
    displayMessage("Start Guessing");
    document.querySelector(".highscore").textContent = 0;
    document.querySelector(".score").textContent = 20;
  }
});
