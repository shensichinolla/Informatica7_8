let counter = 60;

function count() {
    counter--;
    document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled="true";
    };
});
