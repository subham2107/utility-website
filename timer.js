const startButton=document.querySelector('#start-button');
const resetButton=document.querySelector('#reset-button');
const timer=document.querySelector('#timer');

let timerId;let ct=0;

startButton.addEventListener('click',()=>{
  
  if(startButton.value=='Start'){
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

ct++;
ct%2==0?startButton.value='Start':startButton.value='Pause';

});


resetButton.addEventListener('click',()=>{
  
  startButton.value='Start';
  ct=0;
  timer.value=10;
  clearInterval(timerId);

});
