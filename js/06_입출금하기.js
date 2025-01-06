/* 입/출금 하기 */
const output =document.getElementById("output");  /* 잔액 출력 span */
const amount =document.getElementById("amount");  /* 잔액 input */
let balance =10000;  /* 잔액 기록 변수 (초기값 10000) */
const password ="1234"; /* 비밀번호 저장 변수(초기 비밀번호 1234) */
// 함수 내부에 작성되지 않는 코드
// -> HTML 페이지 로딩시 script 파일이 전체 해석되면서 같이 해석/수행 된다
output.innerText =balance;  /* 잔액 초기 값 */
amount.value =""; /* 금액 입력 input 의 value 값을 null 로 변경 -> input 값 초기화 */
/** Test */
function test(){
  /* prompt("내용") 
    - 확인 클릭 : 입력된 값 반환
    - 취소 클릭 : null값 반환 */
  const pw =prompt("비밀번호를 입력하세요.");
  if(pw ===null){
    alert('비밀번호 입력 취소');
    return;
  }
  if(pw !==password){
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }
  alert('출금 기능으로');
}
/** 입금 */ 
function deposit(){
  balance +=Number(amount.value);  /* balance = balance + Number(amount.value); */
  output.innerText =balance;  
  amount.value ="";
}
/** 출금 */
function withdrawal(){
  const pw =prompt("비밀번호를 입력하세요.");
  if(pw ===null || pw !==password){
    alert("비밀번호가 일치하지 않거나 입력을 취소하셨습니다");
    return;
  }
  if(balance <Number(amount.value)){
    alert("출금 금액이 잔액보다 클 수 없습니다");
    amount.value ="";
    return;
  }
  balance -=Number(amount.value);  
  output.innerText =balance;  
  amount.value ="";
  alert(`${Number(amount.value)}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);  
}