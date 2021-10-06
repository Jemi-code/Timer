const countScr = document.getElementById("pscreen");


let setTime = 1;
let timeSec = setTime * 60;
let start = 1;
document.getElementById("addisplay").innerHTML = `${Math.floor(timeSec/60)} : ${timeSec%60}`;


function downCount() {
   let seconds = timeSec % 60;
   
   let minutes = Math.floor(timeSec/60);
   
   minutes = minutes < 10 ? '0' + minutes : minutes;

   seconds = seconds < 10 ? '0' + seconds : seconds;

   countScr.innerHTML = `${minutes} : ${seconds}`;
   timeSec--;

   timeSec = timeSec < 0 ? 0 : timeSec;
}

function startDown(){
   setInterval(downCount, 1000);
}

function upCount() {
   let seconds = start % 60;
   let minutes = Math.floor(start/60);
   minutes = minutes < 10 ? '0' + minutes : minutes;
   seconds = seconds < 10 ? '0' + seconds : seconds;
   
   if(start < timeSec) {
   countScr.innerHTML = `${minutes} : ${seconds}`;
   start++;
   } else {
      countScr.innerHTML = `${minutes} : ${seconds}`;
   }
}

function startUp() {
   setInterval(upCount, 1000);
}
