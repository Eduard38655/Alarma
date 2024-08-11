let seconds=document.getElementById("seconds");
 let minutes=document.getElementById("minutes");
 let hour=document.getElementById("hour");
 let boton=document.getElementById("boton");

let seconds_time=0;
 let minutes_time=0;
 let hour_time=0;
 let time_out=0;

 function formatTime(value) {
    return value < 10 ? '0' + value : value;
}
function Clock24(params) {

   time_out=setInterval(() => {
    seconds_time++;
    
    if (seconds_time>=60) {
        seconds_time=0;
     minutes_time++;
        
        if (minutes_time>=60) {
            minutes_time=0;
            hour_time++;
        }

        if (hour_time>=24) {
            hour_time=0;
        }
    }


seconds.innerHTML=formatTime(seconds_time);
minutes.innerHTML=formatTime(minutes_time)+" :";
hour.innerHTML=formatTime(hour_time)+" :";

   }, 1000);
}


Clock24();

 
document.getElementById("stop").addEventListener("click", stop_interval);

document.getElementById("continue").addEventListener('click',continue_interval);

document.getElementById("Refresh").addEventListener("click",update_interval);

function continue_interval(params) {
    Clock24();
    alert("The alarm is running.");
}



function stop_interval() {
    setTimeout(() => {
        
        clearTimeout(time_out);
        alert("The alarm has been paused.");
    }, 0);
}

function update_interval(params) {
    location.reload();
    alert("The alarm has been updated.");
}
function start(params) { 

    boton.classList.add("press_boton");
    boton.addEventListener("click",start_event);

function start_event(params) {
    boton.classList.add("press_boton_2");
    alert("You has pressed the button.");
 }
}

start();