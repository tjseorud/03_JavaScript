/** */
const colors =document.querySelectorAll('.color-input');
const displays =document.querySelectorAll('.box');
const radios =document.querySelectorAll('.opacity-container > input');
// const radios =document.querySelectorAll('[name=opacity-btn]');

for(let i=0;i<displays.length;i++){
  colors[i].addEventListener('keyup',function(){
    displays[i].style.backgroundColor =colors[i].value;
  });
}
// change Event : input에 값또는 체크박스/라디오 체크여부가 변했을 때
for(let i=0;i<radios.length;i++){
  radios[i].addEventListener('change',function(e){
    // console.log(e); 
    // radio 버튼 체크시 change 이벤트 감지
    console.log(e.target.value); 
    /* 향상된 for : 
     * - 배열에 저장된 모든 요소를 순차 접근하는 용도
     * - 순차 접근 상황이 빈번히 발생하여 작성법을 간단하게 변화시킴
     * [작성법]
     * [for of]
     * for(let i of arr){} 
     *  - for 반복될때 마다 배열 내 요소를 0번 부터 하나씩 꺼내서 of 앞에 변수에 대입하는 for
     */
    for(let box of displays){
      /* for가 반복 될 때 마다 displays[i]까지 1개씩 box에 대입 */
      box.style.opacity =e.target.value;
    }
  });
}