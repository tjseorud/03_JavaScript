const calc =document.querySelector('#calc');
calc.addEventListener('click',()=>{
  // 계산 버튼이 클릭되는 시점에 .input-number를 모두 얻어와 작성된 값의 합계를 구해서 출력
  const inputs =document.querySelectorAll('.input-number');
  let sum =0;
  for(let input of inputs){
    sum += Number(input.value);
  }
  alert(`합계 : ${sum}`);
});
const add =document.querySelector('#add');
const container =document.querySelector('.container');
add.addEventListener('click',()=>{
  const div =document.createElement("div");
  const input =document.createElement("input");
  const span =document.createElement("span");
  div.className ="row";
  input.className ="input-number";
  input.type ="number";
  span.className ="remove-row";
  span.innerHTML ="&times;";  /* HTML 특수문자는 innerHTML 사용 */
  span.addEventListener('click',e=>{  /* X 버튼 이벤트 리스너 추가 */
    e.target.parentElement.remove();  /* 한 줄(.row) 제거 */
  });
  div.append(input,span); /* div, input, span 조립 */
  container.append(div);  /* 조립한거 포장 */
});