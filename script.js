let [milliseconds, seconds, minutes, hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int;

document.getElementById('startTimer').assEventListener('click', () => {
    int = setInterval(displayTimer, 10);
});

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
}

}