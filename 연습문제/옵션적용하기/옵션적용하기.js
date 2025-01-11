const btn =document.querySelector('#btn');  /* 적용버튼 */
const inWidth =document.querySelector('#input-w');  /* 너비 */
const inHeight =document.querySelector('#input-h'); /* 높이 */
const fontSize =document.querySelector('#input-fs');  /* 글자크기 */
// 처음 html 로딩시 고정되니 전역으로 사용 X
// const fontW =document.querySelector('[name=input-fw:checked]'); /* 글자굵기 */
const color =document.querySelector('#input-fc'); /* 글자색 */
const bgc =document.querySelector('#input-bg'); /* 배경색 */
// const fontJc =document.querySelector('[name=input-jc:checked]'); /* 가로정렬 */
// const fontAi =document.querySelector('[name=input-ai:checked]'); /* 글자입력 */
const inText =document.querySelector('#input-text');  /* 입력창 */
const display =document.querySelector('#box');  /* 뷰 */
btn.addEventListener('click',function(){
  display.style.width =inWidth.value +'px'; /* 너비 */
  display.style.height =inHeight.value +'px'; /* 높이 */
  display.style.fontSize =fontSize.value +'px'; /* 글자크기 */  
  display.style.color =color.value;
  display.style.backgroundColor =bgc.value;
  display.innerText =inText.value;
  
  /* name 중 fb 인 요소중 체크가 되있는 요소 1개만 선택
   * :checked -> 클릭된 요소만 선택 */
  const fontW =document.querySelector('[name=input-fw:checked]'); /* 글자굵기 */
  display.style.fontWeight =fontW.value;
  const fontJc =document.querySelector('[name=input-jc:checked]'); /* 가로정렬 */
  display.style.justifyContent =fontJc.value;
  const fontAi =document.querySelector('[name=input-ai:checked]'); /* 세로정렬 */
  display.style.alignItems =fontAi.value;
});
