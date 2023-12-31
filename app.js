const gameChoices = ["rock", "paper", "scissors"];
// computer choices
const getComputerChoice = () => {
  const choices = Math.floor(Math.random() * (3 - 0) + 0);
  return gameChoices[choices];
};

console.log(getComputerChoice());
