let counter = 1500;
let timerId = null;

function count() {
if (counter > 0) {
counter--;

let minutes = Math.floor(counter / 60);
let seconds = counter % 60;

if (seconds < 10){
    seconds= '0' + seconds;
}

if (minutes < 10){
    minutes ='0'+ minutes;
}
documentquerySelector('h1').innerHTML= minutes 




