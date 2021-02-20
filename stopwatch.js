const startButton=document.querySelector('#start-button');
const pauseButton=document.querySelector('#pause-button');
const resetButton=document.querySelector('#reset-button');
const stopwatchHour=document.querySelector('#stopwatch-hh');
const stopwatchMinute=document.querySelector('#stopwatch-mm');
const stopwatchSecond=document.querySelector('#stopwatch-ss');


let stopwatchId;

startButton.addEventListener('click',()=>{
  stopwatchId=setInterval(()=>{
    stopwatchSecond.value++;
    if(stopwatchSecond.value==='60')
   {
    stopwatchSecond.value=0;
    stopwatchMinute.value++;
   }

   if(stopwatchMinute.value==='60')
   {
    stopwatchMinute.value=0;
    stopwatchHour.value++;
   }


  },1000);
});

pauseButton.addEventListener('click',()=>{
  
  clearInterval(stopwatchId);

});

resetButton.addEventListener('click',()=>{
  
  stopwatchHour.value=0;
  stopwatchMinute.value=0;
  stopwatchSecond.value=0;
  clearInterval(stopwatchId);
});