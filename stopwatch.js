const startButton=document.querySelector('#start-button');
const resetButton=document.querySelector('#reset-button');
const stopwatchHour=document.querySelector('#stopwatch-hh');
const stopwatchMinute=document.querySelector('#stopwatch-mm');
const stopwatchSecond=document.querySelector('#stopwatch-ss');
const stopwatchMilliSecond=document.querySelector('#stopwatch-ms');


let stopwatchId;let time=0;

if(stopwatchHour.value.length===1)
stopwatchHour.value='0'+ stopwatchHour.value;

if(stopwatchMinute.value.length===1)
stopwatchMinute.value='0'+ stopwatchMinute.value;

if(stopwatchSecond.value.length===1)
    stopwatchSecond.value='0'+ stopwatchSecond.value;

if(stopwatchMilliSecond.value.length===1)
    stopwatchMilliSecond.value='00'+ stopwatchMilliSecond.value;    

startButton.addEventListener('click',()=>{

  if(startButton.value==='Start'){

  stopwatchId=setInterval(()=>{
   
   time++;
   stopwatchMilliSecond.value=parseInt(time) % 1000;
   stopwatchSecond.value=parseInt(time/1000)%60;
   stopwatchMinute.value=parseInt((time/1000)/60)%60;
   stopwatchHour.value=parseInt((time/1000)/60)/3600 % 60 ;

   /*
   stopwatchSecond.value=(time)%60;
   stopwatchMinute.value=(time/60)%60;
   stopwatchHour.value=(time/3600);
   */

  if(stopwatchMilliSecond.value.length===1)
  stopwatchMilliSecond.value='00'+ stopwatchMilliSecond.value;
   
   if(stopwatchSecond.value.length===1)
    stopwatchSecond.value='0'+ stopwatchSecond.value;
  
   if(stopwatchMinute.value.length===1)
    stopwatchMinute.value='0'+ stopwatchMinute.value;
  
    if(stopwatchHour.value.length===1)
     stopwatchHour.value='0'+ stopwatchHour.value;

  },1);

}else{
  clearInterval(stopwatchId);
}

 if(startButton.value==='Start')
 startButton.value='Pause';

 else if(startButton.value==='Pause')
 startButton.value='Start';
  
});

resetButton.addEventListener('click',()=>{
  
  clearInterval(stopwatchId);
  startButton.value='Start';
  stopwatchHour.value='0'+0;
  stopwatchMinute.value='0'+0;
  stopwatchSecond.value='0'+0;
  stopwatchMilliSecond.value='00'+0;
  time=0;
  
});