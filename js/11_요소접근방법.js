/* JS CSS
 *요소.style. */
/**class를 이용한 요소(DOM Object) 접근 방법 */
function classTest(){
  /* 유사 배열 : 배열 처럼 index, length를 제공, 배열 전용 함수(메서드)를 제공 X */
  // (유사)배열 형태로 반환
  const divs =document.getElementsByClassName("cls-test");
  console.log(divs);
  // divs 순차 접근
  for(let i=0;i<divs.length;i++){
    console.log(divs[i].innerText); /* console print */
    divs[i].style.backgroundColor=divs[i].innerText;
  }
}
function classInit(){
  const divs =document.getElementsByClassName("cls-test");

  for(let i=0;i<divs.length;i++){
    divs[i].style.backgroundColor="white";
  }
}
/**input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){
  // .cls-input를 가지는 요소를 모두 얻고 저장
  const inputs =document.getElementsByClassName("cls-input"); /* .cls-input */
  let sum=0;

  for(let i=0;i<inputs.length;i++){
    sum +=Number(inputs[i].value);  /* 각 input값을 얻고 numberType으로 변환 후 sum에 누적 */
  }
  document.getElementById("sumResult").innerText =sum;
}
/**tag로 요소 접근하여 배경색 변경 */
function tagNameTest(){
  const lists =document.getElementsByTagName("li");

  for(let i=0;i<lists.length;i++){
    const num =Number(lists[i].innerText);  
    lists[i].style.backgroundColor =`rgb(240, 0, ${20*num})`;
  }
}
/**취미 선택하기 */
function nameTest(){
  const hobbyList =document.getElementsByName("hobby"); /* #hobby */
  let content=''; /* 화면 출력용 */
  let count=0;  /* 체크된 개수 확인 */

  for(let i=0;i<hobbyList.length;i++){
    if(hobbyList[i].checked===true){
      console.log(hobbyList[i].value);
      count++;
      content +=hobbyList[i].value +" ";
    }
  }
  content +=`<br><br>선택한 취미 개수 : ${count}`;
  const div =document.getElementsByClassName("name-result")[0]; /* .name-result */
  /* document.getElementsByClassName("name-result"); : HTMLCollection [div.name-result] -> 유사 배열
   * document.getElementsByClassName("name-result")[0]; : div.name-result
   */
  div.innerHTML =content; 
}