const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function game (){
    //rework the logic

    // console.log('Script is running')
    // for(let i = 0; i<=5 ; i++){
    //     input = getPlayerInput()
    //     if(input){
    //         descision(input, getComputerInput());
    //     }
    // }
}

function getPlayerInput (){
    //let input = prompt('Rock, Paper, Scissors?').toLocaleLowerCase();
    switch (input){
        case 'rock':
            return ROCK;
        case 'paper':
            return PAPER;
        case 'scissors':
            return SCISSORS;
        default:
            console.error('Wrong input, check your spelling: ' + input);
    }
}

function getComputerInput() {
    return Math.random() *3 +1;
}

function descision(playerInput, computerInput){
    if(playerInput === computerInput){
        console.log('Tie');
    }
    if(playerInput === ROCK){
        if(computerInput === SCISSORS){
            console.log('You won!')
            return;
        }
        else{
            console.log('The computer won :(')
        }
    }
}

game()