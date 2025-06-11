console.log("Hello World!");
/* 1 = rock, 2 = paper, 3 = scissors*/
function getComputerChoice()
{
    return Math.floor(Math.random() * 5) + 1;
}

function getPlay(num)
{
    switch (num){
        case 1:
            return ("Rock");
        case 2:
            return ("Paper");
        case 3:
            return ("Scissors");
        case 4:
            return ("Lizard");
        case 5:
            return ("Spock");
        default:
            return ("ERROR");
            
    }
}

function getHumanChoice()
{
    let answer = (prompt("Rock, Paper, Scissors, Lizard, or Spock?").toLowerCase());
    if (answer == "rock")
        return 1;
    if (answer === "paper")
        return 2;
    if (answer === "scissors")
        return 3;
    if (answer === "lizard")
        return 4;
    if (answer == "spock")
        return 5;
    else{
    console.log("Input Error. Please retry.")
    return getHumanChoice();
    }

}

let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(humanChoice, computerChoice)
{
    //console.log("human choice: " + humanChoice + " | " + "computer choice: " + computerChoice); //DEBUG
    if (humanChoice == computerChoice)
    {
        console.log("Tie!");
        tieScore++;
    }
    //Player Wins
    else if (
        (humanChoice == 1 && (computerChoice != 2 && computerChoice != 5)) //if player == rock AND cpu != paper or spock
        ||
         (humanChoice == 2 && (computerChoice != 3 && computerChoice != 4)) //if player == paper AND cpu != lizard or scissors 
        ||
        (humanChoice == 3 && (computerChoice != 1 && computerChoice != 5)) //if player == scissor AND cpu != rock or
        ||
        (humanChoice == 4 && (computerChoice != 3 && computerChoice !=  1)) //if player == scissor AND cpu != rock or spock
        ||
        (humanChoice == 5 && (computerChoice != 2 && computerChoice != 4)) //if player == scissor AND cpu != rock or spock


        )
    {
        console.log("You Win! " + getPlay(humanChoice) + " beats " + getPlay(computerChoice));
        humanScore++;
    }
    else
    {
        console.log("You Lose! " + getPlay(humanChoice) + " loses to " + getPlay(computerChoice));
        computerScore++;
    }
    
}



function playGame(number)
{
    for (let i = 0; i < number; i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

let games = parseInt(prompt("How many games do you want to play?"));
playGame(games);
console.log("You played: " + games + " games.");
console.log("Your Total Score: " + humanScore);
console.log("Computer's Total Score: " + computerScore);
console.log("Tied games: " + tieScore);
