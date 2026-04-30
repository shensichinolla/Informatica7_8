function flipcoin(userchoice){
    let randomNumber= Math.random();
    let coinresult;
    console.log(randomNumber);

    let subtitle= document.querySelector("h2");
    if (randomNumber < 0.5){
        subtitle.innerHTML="Heads";
        subtitle.style.color="red";
        coinresult= "Heads";
    }else{
        subtitle.innerHTML="Tails";
        subtitle.style.color="blue";
        coinresult="Tails";
    }
    let message= document.querySelector("h3");
    if (userchoice == coinresult){
        message.innerHTML="YOU WIN!!!";
    }else{
        message.innerHTML="YOU LOOSE";
    }
}




