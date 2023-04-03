let playerScore = 0;
let cpuScore = 0;

let getComputerChoice = () => {
    let cpuChoice = Math.floor(Math.random() * 3);

    if (cpuChoice === 0) {
        return 'Rock';
    } else if (cpuChoice === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

let playRound = (userChoice, computerChoice) => {
    if (userChoice === 'rock' && computerChoice === 'paper') {
        cpuScore += 1;
        return 'You Lose! Paper beats Rock.';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        playerScore += 1;
        return 'You Win! Rock beats Scissors.';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        cpuScore += 1;
        return 'You Lose! Scissors beats Paper.';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        playerScore += 1;
        return 'You Win! Paper beats Rock.';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        cpuScore += 1;
        return 'You Lose! Rock beats Scissors.';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        playerScore += 1;
        return 'You Win! Scissors beats Paper.';
    } else if (userChoice === computerChoice) {
        return 'Draw';
    }
}

let winGame = () => {
    if (playerScore == 5) {
        return "You Win!"
    } else if (cpuScore == 5) {
        return "You Lose!"
    }
}


let game = () => {
    while (playerScore < 5 && cpuScore < 5) {
        let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerChoice = getComputerChoice().toLowerCase();
        alert(playRound(userChoice, computerChoice));
        console.log(`Your score: ${playerScore}`);
        console.log(`CPU score: ${cpuScore}`);
    }
    console.log(winGame());
}

game();
