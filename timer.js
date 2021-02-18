const startButton=document.querySelector('#start-button');
const pauseButton=document.querySelector('#pause-button');
const resetButton=document.querySelector('#reset-button');
const timer=document.querySelector('#timer');

let timerId;

startButton.addEventListener('click',()=>{
  timerId=setInterval(()=>{
    if(timer.value==='0')
   {
    timer.value=11;
   }
    timer.value--;
    if(timer.value==='0')
   {
    clearInterval(timerId);
   }
  },1000);
});

pauseButton.addEventListener('click',()=>{
  
  clearInterval(timerId);

});

resetButton.addEventListener('click',()=>{
  
  timer.value=10;
  clearInterval(timerId);
});
