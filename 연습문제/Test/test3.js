const btn =document.querySelector('#btn');
btn.addEventListener('click',()=>{
  const fruits =document.querySelectorAll('#fruit:checked');
  let str ='';
  let sum =0;
  for(let fruit of fruits){
    const parent =fruit.parentElement;
    const name =parent.children[1].innerText;  /* innerText == textContent */
    const span =parent.children[2].innerText;  /* input type을 제외한 모든 */
    const number =parent.children[3].value;  /* input type : value only */
    str +=`${name} ${number}개 `;
    sum +=Number(span) *Number(number);
  }
  document.querySelector('#result').innerText =`${str} 총합 ${sum}원`;
});