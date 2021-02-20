let ip=document.querySelector('#ipAddress');
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(json => ipAddress.innerHTML=json.ip);

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