const createBtn =document.querySelector('#create');
const resetBtn =document.querySelector('#reset');
const printBtn =document.querySelector('#print');
const btnContainer =document.querySelector('.btnContainer');
const display =document.querySelector('.display');

createBtn.addEventListener('click', () => {
  btnContainer.classList.toggle('hidden'); 
  createBtn.classList.toggle('hidden');
  for (let i=1; i<=45; i++) { 
    const number =addNumber('div', 'number', i);
    number.addEventListener('click', e => {   /* 숫자 클릭시 */
      const count =document.querySelectorAll('.bg-color').length;  /* 선택된 숫자의 갯수 */
      if(count < 6 || e.target.classList.contains('bg-color')) {   /* 선택된 숫자가 6개 미만이거나 선택된 숫자를 다시 클릭한 경우 */
        e.target.classList.toggle('bg-color');
      }else{
        alert('번호는 6개까지 선택 가능합니다.');
      }
    });
    display.append(number);   /* 화면 숫자 표시 */
  } 
});

printBtn.addEventListener('click', () => {
  const numbers =document.querySelectorAll('.number');
  printBtn.disabled = true; // 생성 중 클릭 못하게 비활성화

  let currentInterval = setInterval(()=>{
    resetFn(); // 기존 선택 초기화
    const arr =new Array();
    for(let i=0; i<6; i++){                                                                   
      const num =Math.floor(Math.random() * 45 + 1);  /* 1-45까지의 숫자 */
      if(arr.includes(num)){  /* 중복 검사 */
        i--;
        continue;
      }
      arr[i] =num;
      arr.sort(function(a,b){a-b}); /* arr.sort((a,b)=>a-b);  */
    }
    arr.forEach(item => {  /* 선택된 숫자 표시 */
      numbers[item-1].classList.add('bg-color');   
    });
  }, 50);

  const ran = Math.floor(Math.random() * 6 + 5);
  setTimeout(()=>{
    clearInterval(currentInterval);
    printBtn.disabled = false;  // 클릭 가능하게 활성화
  }, ran * 200);
});

resetBtn.addEventListener('click', ()=>{resetFn();});

/**document.createElement(Tag); 
 * @param Tag - 태그 이름
 * @param Type - 클래스 이름
 * @param i - 숫자
*/
function addNumber(Tag, Type, i) {
  const el =document.createElement(Tag);
  el.className =Type;
  el.innerText =i;
  return el;
}

/**reset */
function resetFn(){
  const bgColor =document.querySelectorAll('.bg-color');
  bgColor.forEach(item => {
    if(item.classList.contains('bg-color')){
      item.classList.remove('bg-color');
    }else{
      item.classList.add('bg-color');
    }
  });
}