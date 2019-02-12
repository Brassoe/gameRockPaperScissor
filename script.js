var computerWins = 0;
var playerWins = 0;

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissor');


function main() {
    rock_div.addEventListener('click', function () {
        startRound('r');
    });
    paper_div.addEventListener('click', function () {
        startRound('p');
    });
    scissors_div.addEventListener('click', function () {
        startRound('s');
    });
}

//Initializes a round
function startRound(userChoice) {
    let playerChoice = userChoice;
    let computerChoice = getComputerChoice();

    showHands(playerChoice, computerChoice);

    var winner = checkWinner(playerChoice, computerChoice);

    winnerResult(winner);
    updateResults();
}

//Returns a random value from the computer
function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    var randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//Shows the hands of both the player and computer
function showHands(playerChoice, computerChoice) {
    var playerChoice = choiceConverter(playerChoice);
    var computerChoice = choiceConverter(computerChoice);
    console.log(playerChoice);
    var getPlayerCondition = document.getElementById('playercondition').getElementsByClassName('condition')[0];
    var getComputerCondition = document.getElementById('computercondition').getElementsByClassName('condition')[0];

    getPlayerCondition.textContent = playerChoice;

    getComputerCondition.textContent = computerChoice;

    console.log(getPlayerCondition);
    console.log(getComputerCondition);
}

//Converts the choice from a simple letter to a word (Either rock, paper or scissor)
function choiceConverter(choice) {
    switch (choice) {
        case 'r':
            return 'Rock';
            break;
        case 'p':
            return 'Paper';
            break;
        case 's':
            return 'Scissor'
            break;
    }
}

//This function determines the winner of the game
function checkWinner(playerChoice, computerChoice) {
    var turn = playerChoice + computerChoice;

    switch (turn) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log("Player Wins");
            this.playerWins++;
            return 'Player';
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            console.log("Computer Wins");
            this.computerWins++;
            return 'Computer';
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log("TIE");
            return 'tie';
            break;
    }

}

function winnerResult(winner) {
    var getWinnerCondition = document.getElementById('winnercondition').getElementsByClassName('condition')[0];

    if (winner == 'Player' || winner == 'Computer') {
        getWinnerCondition.textContent = winner + ' is the winner!';
    }
    else {
        getWinnerCondition.textContent = "It's a tie!";
    }
}

function updateResults() {
    var targetComputer = document.getElementById('computer').getElementsByClassName('score')[0];
    var targetPlayer = document.getElementById('player').getElementsByClassName('score')[0];

    targetComputer.textContent = computerWins;
    targetPlayer.textContent = playerWins;
};


main();



