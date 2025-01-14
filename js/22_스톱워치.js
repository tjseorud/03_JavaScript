/* 스톱워치 전역 변수 설정 */
const startBtn =document.querySelector('#startBtn');
const recordBtn =document.querySelector('#recordBtn');
const resetBtn =document.querySelector('#resetBtn');
const display =document.querySelector('#display');
const recordContainer =document.querySelector('#recordContainer');
const timeList =document.querySelectorAll('#display > span'); /* 분, 초, 1/100초를 출력하는 span */
/** count ===10000 -> 100초 -> 1분 40초 00
 * count ===100   -> 1초 
*/
let count =0; /* 1/100초 마다 1씩 증가 */

/**Clear Interval() 사용 방법 
 * 1. setInterval() 수행 후 반환 되는 값을 변수에 대입
 *   ex) const currentInterval =setInterval();
 * 2. clearInterval(변수명) 수행
 *   ex) clearInterval(currentInterval); -> setInterval() 동작 멈춤
*/
let currentInterval; /* Start 버튼 클릭된 경우 setInterval() 저장 변수 */

/* Start 버튼 클릭된 경우 
 * - Start <> Pause 버튼으로 변경 
 * - Start가 클릭된 경우 count가 1씩 증가
 * - count 증가 후 화면에 시간을 계산해서 출력(별도 함수)
*/ 
startBtn.addEventListener('click',()=>{ /* Start <> Pause 버튼으로 변경 */
  if(startBtn.innerText ==="PAUSE"){
    startBtn.innerText ="START";
    recordBtn.disabled =true;  /* 비활성화 */
    // setInterval()을 깨끗이 치워버림 -> Clear Interval()
    clearInterval(currentInterval); /* 멈춤 */
    return;
  }
  // startBtn.innerText ==="START"인 경우
  startBtn.innerText ="PAUSE";  /* 일시정지로 버튼 변경 */
  recordBtn.disabled =false;  /* 비활성화 취소 -> 활성화 */
  // Start가 클릭된 경우 10ms마다 count가 1씩 증가
  currentInterval =setInterval(()=>{
    count++;
    // console.log(count);
    displayOutput();
  },10);
});

/* Reset 버튼 클릭된 경우 
 * - Start 버튼 형태로 변경
 * - Record 버튼 비활성화 
 * - count=0;
 * - clearInterval() 수행
 * - 화면 숫자 00:00.00 (별도 함수)
 * - recordContainer에 기록된 내용 모두 삭제 
*/
resetBtn.addEventListener('click',()=>{ 
  startBtn.innerText ="START";  /* Start 버튼 형태로 변경  */
  recordBtn.disabled =true; /* Record 버튼 비활성화 */
  count =0; /* count 0으로 초기화 */
  clearInterval(currentInterval); /* 반복 종료 */
  recordContainer.innerHTML =''; /* recordContainer 내용 모두 삭제 */
  displayOutput(); /* 화면 출력 */
});

/**전달 받은 수가 10 미만이면 앞에 "0" 붙여 반환하는 함수 
 * @param num : 숫자
*/
function attachZero(num){
  if(num <10){
    return "0" +num; /* "04" */
  }
  return num +""; /* string 타입으로 변환 */
}

/**시계 화면 출력 함수 
 * - count 값을 계산하여 분,초, 1/100초 출력
*/
function displayOutput(){
  // 화면에 출력될 시간  분,초, 1/100초 계산 후 변수에 저장
  const minute =attachZero(Math.floor(count /100 /60));
  const second =attachZero(Math.floor(count /100 %60));
  const ms =attachZero(count %100);
  // 화면 출력
  if(minute !==timeList[0].innerText){  /* minute 변수에 저장된 값과 현재 화면에 출력된 내용이 다를 경우 */
    timeList[0].innerText =minute;
  }
  if(second !==timeList[1].innerText){  /* second 변수에 저장된 값과 현재 화면에 출력된 내용이 다를 경우 */
    timeList[1].innerText =second;
  } 
  timeList[2].innerText =ms;  /* ms 단위는 계속 변하기에 if 불필요 */
}

/* Record 버튼 클릭된 경우 
 * - #display에 작성된 내용을 모두 읽어와 
 *   <li>읽어온 시간</li> 형태를 만들어 
 *   #recordContainer의 마지막 자식으로 추가
*/
recordBtn.addEventListener('click',()=>{
  // console.log(display.innerText);
  // console.log(display.innerHTML); /* 태그까지 모두 얻어옴 */
  const li =document.createElement('li'); /* li 태그 생성 */
  li.innerText =display.innerText;  /* 현재 시간을 li 내용으로 추가 */
  recordContainer.append(li);
});