const btn =document.querySelector('#btn');
const container =document.querySelector('#container');
btn.addEventListener('click',()=>{
  container.innerText ='';
  const count =document.querySelector('#count');
  for(let i=0;i<count.value;i++){
    const input =document.createElement("input");
    input.className ="input-number";
    input.type ="number";
    container.append(input);
  }
});
const sumBtn =document.querySelector('#sumBtn');
const result =document.querySelector('#result');
sumBtn.addEventListener('click',()=>{
  const inputs =document.querySelectorAll('.input-number');
  let sum=0;
  for(let input of inputs){
    sum +=Number(input.value);
  }
  result.innerText =sum;
});
