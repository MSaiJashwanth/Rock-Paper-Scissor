let userScore = 0;
let compScore = 0;


let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_Score = document.querySelector(".myscore");
let comp_Score = document.querySelector(".compscore");

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you won the game");
        msg.innerText = `You Won, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        user_Score.innerText = userScore;

    }
    else {
        console.log("you loose the game");
        msg.innerText = `You Loose,  ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp_Score.innerText = compScore;
    }
}

const compGame = ()=> {
    const options = ["rock", "paper", "scissor"];
    const compOption = Math.floor(Math.random()*3);
    return options[compOption];
}

const gamePlay = (userChoice) => {
    console.log("ours choice =", userChoice);
    const compChoice = compGame();
    console.log("comp Choice =", compChoice);

    if (userChoice === compChoice) {
        console.log("it's a draw!!!");
        msg.innerText = "Game was Draw!!!";
        msg.style.backgroundColor = "#3e5879";
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        gamePlay(userChoice);
    })
})
