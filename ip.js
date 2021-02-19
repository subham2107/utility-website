let ip=document.querySelector('#ip');
fetch('https://api.ipify.org/?format=json')
  .then(response => response.text())
  .then(data => ip.innerHTML=data);

/*
const functionWithPromise = () => {
  return new Promise((resolve, reject) => {
      fetch('https://api.ipify.org/?format=json')
.then(response => {resolve(response.json().data);
  } )
  .catch(error=>{reject(error);
  });
} );
}*/



/*const promise=new Promise((resolve,reject)=>{
  fetch('https://api.ipify.org/?format=json')
  .then(response=>{
    resolve(response.json().data);
  });
});

const onSucess=result=>{
  ip.innerHTML=result;
}

promise.then(onSucess); */