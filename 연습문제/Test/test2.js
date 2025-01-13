const number =document.querySelectorAll('.number');
const result =document.querySelector('#result');
for(let i=0;i<10;i++){
  number[i].addEventListener('click',(e)=>{
    result.innerText +=e.target.value;
  });
}
const btn =document.querySelector('#reset');
btn.addEventListener('click',()=>{
  result.innerText ='';
});