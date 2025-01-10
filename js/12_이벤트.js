/**Inline Event Model + this */
/* 전달인자(Argument) : 함수 호출 시 () 안에 작성 함수 매개변수로 전달 
 * 매개변수(Parameter) : 함수 정의 시 () 작성하는 변수 함수 호출시 전달된 값을 저장
 */
function check1(div){
  // console.log(div);
  let num =Number(div.innerText); /* 버튼 값 */
  // isNaN(값) : 값이 NaN 인 경우 true, 숫자면 false
  if(isNaN(num)){ /* 숫자가 이닌 경우 */
    div.innerText =1;
    return;
  }
  /* 숫자인 경우 */
  div.innerText =++num; 
}
/**고전 Event Model */
const testA =document.querySelector('#testA');
// const testA =document.getElementById('testA');
/* 고전 Event Model 작성법 
 * 요소.Event Listener =Event Handler; */
testA.onclick =function(){
  /* testA 가 가지고 있는 
   * onclick 변수에 -> (Event Listener)
   * function(){}을 대입 -> (Event Handler) */
  /* 고전 이벤트 모델에서 this == Event가 발생한 요소 */
  console.log(this);
  alert('고전 이벤트 모델'); 
}
/**고전 Event Model 제거 */
// #testB 클릭시 #testA의 클릭 이벤트 핸들러 제거
const testB =document.querySelector('#testB');
testB.onclick =function(){
  testA.onclick =null;
  alert('이벤트 핸들러 제거');
}
/**고전 Event Model 단점 */
// 이벤트 리스너에 이벤트 핸들러 대입
const testC =document.querySelector('#testC');
testC.onclick =function(){
  testC.style.backgroundColor ='pink';
}
// 이벤트 리스너에 이벤트 핸들러 다시 대입
const testC =document.querySelector('#testC');
testC.onclick =function(){
  testC.style.fontSize ='40px';
}
/**표준 Event Model */
// 클릭할수록 투명 + 횟수 증가
const test1 =document.querySelector('#test1');
test1.addEventListener('click',function(){
  let current =test1.style.opacity; /* opacity : 불투명도(0 : 투명, 1 : 불투명(선명))*/
  console.log();
  if(current ===""){
    current =1;
  }
  test1.style.opacity =current -0.05;
  if(test1.style.opacity <0){
    test1.style.opacity =1; /* 불투명 */
  }
});
// 횟수 증가
test1.addEventListener('click',function(){
  let num =Number(test1.innerText);
  test1.innerText =++num;
});
/**클릭한 버튼에 작성된 색으로 배경 변경 */
const btns =document.querySelectorAll('.btn-container > button');
const result2 =document.querySelector('#result2');

for(let i=0;i<btns.length;i++){
  btns[i].style.backgroundColor =btns[i].innerText;
  btns[i].addEventListener('click',function(){  /* 클릭시 동작 */
    // this == 클릭된 요소
    // result2.style.backgroundColor =btns[i].innerText;
    result2.style.backgroundColor =this.innerText;
  }); 
}
/**실습 문제 */
/* 변경하기 클릭시 input에 작성된 색상 값을 얻고 .display의 배경색 변경 */
const btn =document.querySelector('#changeBtn');
const displays =document.querySelectorAll('.display');
const colors =document.querySelectorAll('.inputColor');

btn.addEventListener('click',function(){ 
  for(let i=0;i<colors.length;i++){
    displays[i].style.backgroundColor =colors[i].value; /* input은 value로 작성 innerText는 사용불가 */
  }
});