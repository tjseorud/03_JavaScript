const numbers =document.querySelectorAll('.number');
const result =document.querySelector('#result');
for(let number of numbers){
  number.addEventListener('click',(e)=>{
    if(result.innerText.length >=10){
      return; 
    }
    /* textContent == innerText */
    result.innerText +=e.target.innerText;
  });
}

const btn =document.querySelector('#reset');
btn.addEventListener('click',()=>{
  result.innerText ='';
});