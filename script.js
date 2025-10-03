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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();




function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    // let humanWon = true;
    // let tie = false;
    
    if (humanChoice === computerChoice) {
        return "you tied";
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return `you won ${humanChoice} beats ${computerChoice}`;
    } 
    
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return `you won ${humanChoice} beats ${computerChoice}`;
    }
    else if (humanChoice == 'paper' && computerChoice === 'rock') {
        humanScore++;
        return `you won ${humanChoice} beats ${computerChoice}`;
    }
   
    else {
        computerScore++;
        return `you lost ${computerChoice} beats ${humanChoice}`;
    }

    // if(tie) {
    //     console.log("you tied");
    //     console.log(`computer: ${computerSelection} human: ${humanSelection}`);
    // }
    // else if(humanWon) {
    //     console.log("you won");
    //     console.log(`computer: ${computerSelection} human: ${humanSelection}`);
    // }
    // else {
    //     console.log("you lost");
    //     console.log(`computer: ${computerSelection} human: ${humanSelection}`);
    // }

}















