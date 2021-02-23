const input=document.querySelector('#input');
const output=document.querySelector('#output');
const translateButton=document.querySelector('#translate-button');
const resetButton=document.querySelector('#reset-button');

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

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });