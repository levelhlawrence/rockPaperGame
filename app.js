class rockPaperScissorsGame {
  constructor() {
    this.score = {
      player: 0,
      cpu: 0,
      tie: 0,
    };
    this.choices = ["rock", "paper", "scissors"];
    this.gameSection = document.querySelector("#start-game-section");
    this.startGame = document.querySelector("#start-game");
    this.bgAudio = document.querySelector("#background-audio");
    this.bgAudio.volume = "0.01";

    // querying player buttons
    this.playerBtns = document.querySelectorAll(".player-input-btns");
  }

  randomCpu() {
    return this.choices[Math.floor(Math.random() * 3)];
  }
  playerChoices() {
    this.playerBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let playerInput = e.target.id;
        this.playRound(this.randomCpu(), playerInput);
        console.log(this.score);
      });
    });
  }

  playRound(cpuChoice, playerPicks) {
    if (cpuChoice === playerPicks) {
      this.score["tie"] += 1;
      console.log(`${cpuChoice}, ${playerPicks}`);
      console.log(this.score);
    }
  }

  startTheGame() {
    let isStarted = false;
    this.startGame.addEventListener("click", () => {
      this.gameSection.style.display = "none";
      isStarted = !isStarted;
      // console.log(this.score);
    });
  }
}

const game = new rockPaperScissorsGame();
game.startTheGame();
game.playerChoices();
