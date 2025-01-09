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
/**CSS로 요소 접근 */
function cssTest(){
  /* target-div="css-div" */
  const container =document.querySelector("[target-div =css-div]"); /* -> 여러요소가 선택된 경우 "첫번째 요소만 얻음" */
  console.log(container);
  container.style.width='200px';
  container.style.height='200px';
  container.style.border ='10px solid orange';
  // document.querySelector("css"); -> first
  const first =document.querySelector('[target-div =css-div] > div');
  first.style.color ='red';
  first.style.fontSize ='30px';
  // document.querySelectorAll("css");  -> ALL
  const divs =document.querySelectorAll('[target-div =css-div] > div');
  console.log(divs);
  const colors =['yellow','pink'];

  for(let i=0;i<divs.length;i++){
    divs[i].style.height ='50%';
    divs[i].style.display ='flex';
    divs[i].style.justifyContent ='center'; /* 중심축 방향 중앙 */
    divs[i].style.alignItems ='center'; /* 교차축 방향 중앙 */
    divs[i].style.backgroundColor =colors[i]; 

  }
}
/**카카오톡 모양의 채팅 화면 만들기 */
function readValue(){
  const bg =document.querySelector('#chattingBg');  /* chat Bg */
  const input =document.querySelector('#userInput');   /* input chat */
  /* input null || 공백 문자(띄어쓰기, Tab, 엔터)만 있을 경우*/
  // string.trim(); : 문자열 좌우 공백 제거
  if(input.value.trim().length ===0){
    alert('내용을 입력하세요');
    input.value ='';  /* 내용 제거 */
    input.focus();  /* input에 초점을 맞춤 */
    return;
  }
  bg.innerHTML +=`<p><span>${input.value}</span></p>`;  /* input 값 채팅화면에 누적 */
  input.value ='';
  input.focus();
  // 요소.scrollHeight : 스크롤되어 가려진 부분을 포함한 요소 전체 높이
  // 요소.scrollTop : 스크롤 상단부터 현재 위치
  // 요소.scrollTop =value; -> 스크롤 상단에서 지정된 값 만큼 위치로 이동
  bg.scrollTop =bg.scrollHeight;
}
/* #userInput에 'Enter'키가 입력된 경우 채팅 추가 */
document.querySelector('#userInput').addEventListener('keydown',function(e){
  // console.log(e.key);
  if(e.key ==='Enter'){
    readValue();
  }
});