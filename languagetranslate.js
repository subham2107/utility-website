let input=document.querySelector('#input');
let output=document.querySelector('#output');
let translateButton=document.querySelector('#translate-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });

translateButton.addEventListener('click',()=>{
  const url = new URL('https://api.mymemory.translated.net/get');
  const param = { q: input.value, langpair: 'en|Ben' };
  Object.keys(param).forEach((key) => {
      url.searchParams.append(key, param[key]);
  });
  url.search = new URLSearchParams(param).toString();
  fetch(url)
  .then((response) => response.json())
      .then((json) => {
          output.value = json.responseData.translatedText;
      });
});

/*let input=document.querySelector('#input');
let output=document.querySelector('#output');

fetch('https://api.mymemory.translated.net/get?q=Hello,%20my%20name%20is%20Gaurav!&langpair=en%7Chi')
  .then(response => response.json())
  .then(json => {output.value=json.responseData.translatedText});
  */