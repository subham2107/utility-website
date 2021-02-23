let ip=document.querySelector('#ipAddress');
fetch('https://api.ipify.org/?format=json')
  .then(response => response.json())
  .then(json => ipAddress.innerHTML=json.ip);
