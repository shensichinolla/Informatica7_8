function game(userChoice){
    let randomNumber=Math.random();
    let compChoice;
    if (randomNumber < 0.33){
        compChoice="Rock";
    }else if(randomNumber < 0.66){
        compChoice="Paper";
    }else if(randomNumber < 1){
        compChoice="Scissors";
    }

    let result = document.querySelector
    ("#result");
    if (userChoice == compChoice){
        result.innerHTML="Tie";
    }else if (userChoice == "Rock"){
        if (compChoice == "Paper"){
            result.innerHTML="YOU LOOSE!";
        }else {
            result.innerHTML="YOU WIN";
        }
    }

    console.log(compChoice)
}

// document.addEventListener('DOMContentLoaded', function(){
//      //code here
// document.querySelector("#rock-button").onclick=

// });
// // }

