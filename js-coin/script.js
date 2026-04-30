function flipcoin(){
    let randomNumber= Math.random();
    console.log(randomNumber);

    let subtitle= document.querySelector("h2");
    if (randomNumber < 0.5){
        subtitle.innerHTML="Heads";
        subtitle.style.color="red";
    }else{
        subtitle.innerHTML="Tails";
        subtitle.style.color="blue";
    }
    

}
