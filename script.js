const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let playerInput;
let computerInput;

let playerWins = 0;
let computerWins = 0;

function game (){
    initGame();
}

function initGame (){
    document.querySelectorAll('.game .choice div').forEach((btn) =>{   //Init player input
        btn.addEventListener('click', (e) => {                          //Setup game flow
            playerInput = getPlayerInput(e.target);
            computerInput = getComputerInput();

            descision(playerInput, computerInput);

            updateScore(btn.className , computerInput);
        })
    })

    const getPlayerInput = (target) => {
        switch (target.className){
            case 'rock':
                return ROCK;
            case 'paper':
                return PAPER;
            case 'scissors':
                return SCISSORS;
            default:
                alert('Something wen\'t wrong, please refresh the page!');
        }
    }
}
function updateScore(){
    document.querySelector('.results .user .move').innerText = playerInput; //Figure choice by css class on pressed button
    document.querySelector('.results .computer .move').innerText = computerInput;

    document.querySelector('.results .user .counter').innerText = 'Wins:' + playerWins;
    document.querySelector('.results .computer .counter').innerText = 'Wins:' + computerWins;

}

function getComputerInput() {
    return parseInt(Math.random() *3 +1);
}

function descision(playerInput, computerInput){
    if(playerInput === computerInput){ return; }
    if(playerInput === ROCK){
        if(computerInput === SCISSORS){
            playerWins++;
            return;
        }
        else{
            computerWins++;
            return;
        }
    }
    if(playerInput === PAPER){
        if(computerInput === ROCK){
            playerWins++;
            return;
        }
        else{
            computerWins++;
            return;
        }
    }
    if(playerInput === SCISSORS){
        if(computerInput === PAPER){
            playerWins++;
            return;
        }
        else{
            computerWins++;
            return;
        }
    }
}

game()