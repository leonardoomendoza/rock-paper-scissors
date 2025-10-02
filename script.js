function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return 'rock'
    }
    else if (randNum === 1) {
        return 'paper';
    }
    else if (randNum === 2) {
        return 'scissors';
    }
}
function getHumanChoice() {
    let humanChoice = prompt('rock, paper, or scissors:  ');
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



function playRound(humanChoice , computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    return humanChoice + " " + computerChoice;
}





