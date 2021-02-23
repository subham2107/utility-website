const startButton=document.querySelector('#start-button');
const resetButton=document.querySelector('#reset-button');
const stopwatchHour=document.querySelector('#stopwatch-hh');
const stopwatchMinute=document.querySelector('#stopwatch-mm');
const stopwatchSecond=document.querySelector('#stopwatch-ss');


let stopwatchId;let ct=0;

if(stopwatchHour.value.length===1)
stopwatchHour.value='0'+ stopwatchHour.value;

if(stopwatchMinute.value.length===1)
stopwatchMinute.value='0'+ stopwatchMinute.value;

if(stopwatchSecond.value.length===1)
    stopwatchSecond.value='0'+ stopwatchSecond.value;

startButton.addEventListener('click',()=>{

  if(startButton.value=='Start'){

  stopwatchId=setInterval(()=>{
    
   stopwatchSecond.value++;
    if(stopwatchSecond.value==='60')
   {
    stopwatchSecond.value='0'+0;
    stopwatchMinute.value++;
   }

   if(stopwatchMinute.value==='60')
   {
    stopwatchMinute.value='0'+0;
    stopwatchHour.value++;
   }

  },1000);

}else{
  clearInterval(stopwatchId);
}

  ct++;
  ct%2==0?startButton.value='Start':startButton.value='Pause';
  
});

resetButton.addEventListener('click',()=>{
  
  startButton.value='Start';
  ct=0;
  stopwatchHour.value='0'+0;
  stopwatchMinute.value='0'+0;
  stopwatchSecond.value='0'+0;
  clearInterval(stopwatchId);
});