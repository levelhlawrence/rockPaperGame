const gameChoices = ["rock", "paper", "scissors"];

// computer choices
const getComputerChoice = () => {
  const choices = Math.floor(Math.random() * 3);
  return gameChoices[choices];
};

const computerChoice = getComputerChoice();

const playRound = (playerSelection, computerChoice) => {
  if (playerSelection === computerChoice) {
    return `It's a tie! playerChoice: ${playerSelection}, cpuChoice: ${computerChoice}!`;
  }

  if (
    (playerSelection === "rock" && computerChoice === "scissors") ||
    (playerSelection === "paper" && computerChoice === "rock") ||
    (playerSelection === "scissors" && computerChoice === "paper")
  ) {
    return `player wins!: player - ${playerSelection} beats cpu - ${computerChoice}`;
  } else {
    return `you lose!: cpu - ${computerChoice} beats player - ${playerSelection}`;
  }
};

console.log(playRound("paper", computerChoice));
