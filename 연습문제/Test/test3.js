const btn =document.querySelector('#btn');
btn.addEventListener('click',()=>{
  const fruit =document.querySelectorAll('#fruit:checked');
  const number =document.querySelectorAll('#number');
  const result =document.querySelector('#result');
  result.innerHTML ='';
  const arr=[];
  let sum =0;
  for(let i=0;i<fruit.length;i++){
    fruit[i].addEventListener('change',()=>{
      // console.log(e.target.value);     
      result.innerHTML +=fruit[i].value;
      result.innerHTML +=number[i].value + '개';
    });
  }
  sum +=number[0].value*2000; /* apple */
  sum +=number[1].value*3000; /* banana */
  sum +=number[2].value*5000; /* melon */
  result.innerHTML +=` 총합 ${sum}원`;
});