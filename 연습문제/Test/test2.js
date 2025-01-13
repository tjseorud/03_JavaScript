const number =document.querySelector('.number');
const result =document.querySelector('#result');
let count =0;
number.addEventListener('click',(e)=>{
  result.innerText +=e.target.innerText;
  if(count===10){
    result.innerText ='';
    count=0;
  }
  count++;
});

const btn =document.querySelector('#reset');
btn.addEventListener('click',()=>{
  result.innerText ='';
});