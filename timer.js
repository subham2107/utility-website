const startButton=document.querySelector('#start-button');
const resetButton=document.querySelector('#reset-button');
const timer=document.querySelector('#timer');

let timerId;

startButton.addEventListener('click',()=>{
  
  if(startButton.value==='Start'){
  timerId=setInterval(()=>{
    if(timer.value==='0')
   {
    timer.value=11;
   }
    timer.value--;
    if(timer.value==='0')
   {
    clearInterval(timerId);
    startButton.value='Start';

   }
  },1000);
  
}else{
  clearInterval(timerId);
}

if(startButton.value==='Start')
 startButton.value='Pause';

 else if(startButton.value==='Pause')
 startButton.value='Start';
});


resetButton.addEventListener('click',()=>{
  
  startButton.value='Start';
  timer.value=10;
  clearInterval(timerId);

});
