const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);

                if (playerScore == 5 || computerScore == 5) {
                    gameOver(playerOptions);
                }
            })
        })
    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        if (player === computer) {
            result.textContent = 'Tie!'
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'You Lose. Paper covers rock.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You win. Rock smashes scissors.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = 'You Lose. Scissors cuts paper.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You win. Paper covers rock.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'You Lose. Rock smashes scissors.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You win. Scissors cuts paper.';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    const gameOver = (playerOptions) => {
        const select = document.querySelector('.select');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        select.innerText = 'Game Over!';
        select.style.fontSize = '3em';

        if (playerScore == 5) {
            result.style.fontSize = '2em';
            result.textContent = 'You Win!';
            result.style.color = 'white';
        } else {
            result.style.fontSize = '2em';
            result.textContent = 'You Lose!';
            result.style.color = 'white';
        }

        reloadBtn.innerText = 'Play Again';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();
//This is the ending bracket for the game function    
}

game();

