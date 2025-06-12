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

function getOutput(num)
{
        switch (num){
        case 1:
            return ('<i class="fa-solid fa-hand-back-fist"></i>');
        case 2:
            return ('<i class="fa-solid fa-hand"></i>');
        case 3:
            return ('<i  class="fa-solid fa-hand-scissors"></i>');
        case 4:
            return ('<i  class="fa-solid fa-hand-lizard"></i>');
        case 5:
            return ('<i  class="fa-solid fa-hand-spock"></i>');
        default:
            return ("ERROR");
            
    }
}


function getHumanChoice(answer) //simplify into a switch statement later
{
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
let totalScore = 50;

function playRound(humanChoice, computerChoice)
{
    let text = document.querySelector(".output");
    //console.log("human choice: " + humanChoice + " | " + "computer choice: " + computerChoice); //DEBUG
    if (humanChoice == computerChoice)
    {
        console.log("Tie!");
        text.textContent = ("Tie!");

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
        text.textContent = ("You Win! " + getPlay(humanChoice) + " beats " + getPlay(computerChoice));
        humanScore++;
        totalScore+=10;
        
    }
    else
    {
        console.log("You Lose! " + getPlay(humanChoice) + " loses to " + getPlay(computerChoice));
        text.textContent = ("You Lose! " + getPlay(humanChoice) + " loses to " + getPlay(computerChoice));
        computerScore++;
        totalScore-=10;
    }
        if (totalScore >= 100)
        {
            text.innerHTML = '<p>You have won the bout!</p> <button id="retry"  type="button"> Retry? </button> '
        }
        if (totalScore <= 0)
        {
            text.innerHTML = '<p>You have lost the bout!</p> <button id="retry"  type="button"> Retry? </button> '
        }
    
}

//scorebar code

var i = 0;
function changeScore(totalScore){
    if (i == 0){
        i = 1;
        var elem = document.getElementById("scoreBar");
        console.log(" score:" + totalScore);
        var width = parseFloat(elem.style.width);
        var id = setInterval(updateBar, 10);

        function updateBar(){
                console.log("debug " + totalScore)
                if (width < totalScore)
                {
                    width++;
                    elem.style.width = width + "%";
                }
                else if (width > totalScore)
                {
                    width--;
                    elem.style.width = width + "%";
                }
                else
                {
                    clearInterval(id);
                    i=0;
                }

                /*
                if (width == totalScore){
                clearInterval(id);
                i=0;
                } else
                {
                width++;
                elem.style.width = width + "%";
                }
                */

        }


    }
}


const btn = document.querySelector("body");
btn.addEventListener('click', (event) =>{
    let target = event.target;

    if (target.id == "")
    {
        console.log("not button");
        
    }
    if (target.id == "retry")
    {
        location.reload();
    }
    else
    {
        console.log(target.id);
        const icon = document.querySelector("#player-option")
        const cpuIcon = document.querySelector("#cpu-option")
        
        const cpuChoice = getComputerChoice();
        const humanChoice = getHumanChoice(target.id);
        //display Icons 
        console.log("hi" + icon.innerHTML.classLi);
        cpuIcon.innerHTML = getOutput(cpuChoice);
        icon.innerHTML = getOutput(humanChoice);
        playRound(humanChoice, cpuChoice);
        changeScore(totalScore);
        

    }

});
