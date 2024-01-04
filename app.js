class rockPaperScissorsGame {
  constructor() {
    // keep track of score and rounds
    this.score = {
      player: 0,
      cpu: 0,
      tie: 0,
    };
    this.rounds = 0;
    this.roundsRemaining = document.querySelector("#rounds-remaining");
    // choices array
    this.choices = ["rock", "paper", "scissors"];
    // querying DOM
    this.gameSection = document.querySelector("#start-game-section");
    this.startGame = document.querySelector("#start-game");
    this.bgAudio = document.querySelector("#background-audio");
    this.bgAudio.volume = "0.01";

    // querying score board
    this.scoreBoard = document.querySelectorAll("#score-area p span");
    // querying player buttons
    this.playerBtns = document.querySelectorAll(".player-input-btns");
  }

  randomCpu() {
    return this.choices[Math.floor(Math.random() * 3)];
  }

  displayScore() {
    this.scoreBoard[0].innerHTML = this.score.player;
    this.scoreBoard[1].innerHTML = this.score.tie;
    this.scoreBoard[2].innerHTML = this.score.cpu;
    this.roundsRemaining.textContent = `Rounds: ${this.rounds} out of 5`;

    this.scoreBoard.forEach((el) => {
      el.style.fontWeight = "900";
    });
  }
  playerChoices() {
    this.playerBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let playerInput = e.target.id;
        this.playRound(this.randomCpu(), playerInput);
        this.displayScore();
      });
    });
  }

  playRound(cpuChoice, playerPicks) {
    if (cpuChoice === playerPicks) {
      this.score["tie"] += 1;
    } else if (
      (playerPicks == "rock" && cpuChoice == "scissors") ||
      (playerPicks == "paper" && cpuChoice == "rock") ||
      (playerPicks == "scissors" && cpuChoice == "paper")
    ) {
      this.score["player"] += 1;
    } else {
      this.score["cpu"] += 1;
    }

    this.rounds += 1;
    this.endGame();
  }

  startTheGame() {
    let isStarted = false;
    this.startGame.addEventListener("click", () => {
      this.gameSection.style.display = "none";
      isStarted = !isStarted;
    });
  }

  playAgain() {
    const playAgainBtn = document.querySelector("#play-again");
    const gameOverScreen = document.querySelector("#game-over");

    playAgainBtn.addEventListener("click", (e) => {
      this.score = {
        player: 0,
        cpu: 0,
        tie: 0,
      };
      this.rounds = 0;
      gameOverScreen.style.display = "none";
    });
  }

  endGame() {
    const gameOverScreen = document.querySelector("#game-over");
    const gameResults = document.querySelector("#game-results");

    if (this.rounds >= 5) {
      if (this.score.player == this.score.cpu) {
        gameResults.textContent = `It's a TIE!`;
      } else if (this.score.player > this.score.cpu) {
        gameResults.textContent = `Winner: Player Score - ${this.score.player}`;
      } else {
        gameResults.textContent = `Winner: Computer Score - ${this.score.cpu}`;
      }
      gameOverScreen.style.display = "flex";
    }
  }

  main() {
    this.startTheGame();
    this.playerChoices();
    this.playAgain();
  }
}

const game = new rockPaperScissorsGame();
game.main();
