/** if - 양수 확인 */
function check1(){
  // id가 input1인 요소를 얻어과 in1 상수에 저장
  const in1 =document.getElementById("input1");
  // 작성된 값을 얻고 숫자로 변환 val 에 저장
  const val =Number(in1.value);
  // 양수(0보다 큰수)가 맞는지 확인
  if(val > 0){
    alert(`${val} 은(는) 양수가 맞습니다.`);  /* True 일 경우 */
  }
  if(val <= 0){
    alert(`${val} 은(는) 양수가 아닙니다.`);  /* False 일 경우 */
  }
}
/** 홀/짝 판별하기 */
function check2(){
  // Math.random()  /* 난수 발생 */
  // Math.random() -> 0.0 <= 난수 < 1.0
  // Math.random() -> (0.0 * 100) <= (난수 * 100) < (1.0 * 100) -> 0.0 <= (난수 * 100) < 100.0
  // 내림 처리 : Math.floor(실수);
  // Math.floor(Math.random() * 100 + 1);
  const randomNumber =Math.floor(Math.random() *100 +1);
  if(randomNumber %2 ==1){
    alert(`[ ${randomNumber} ] 은(는) [ 홀수 ] 입니다.`);
  }else{
    alert(`[ ${randomNumber} ] 은(는) [ 짝수 ] 입니다.`);
  }
}
/** 양수,음수 0 판별기 */
function check3(){
  const input3 =document.getElementById("input3");
  const val =Number(input3.value);
  let result; /* undefined */
  if(val > 0){
    result ="양수";
  }else if(val < 0){
    result ="음수";
  }else{
    result ="0";
  }
  alert(`${val} 은(는) ${result} 입니다.`);
}
/** (Q) 어린이, 청소년, 성인 구분하기 */
function ageCheck(){
  const input =document.getElementById("inputAge");
  const age =Number(input.value);
  if(age >= 0 && age < 14){
    alert(`나이 : ${age} 어린이 입니다.`);
  }else if(age > 13 && age < 20){
    alert(`나이 : ${age} 청소년 입니다.`);
  }else if(age > 19 && age <= 120){
    alert(`나이 : ${age} 성인 입니다.`);
  }else{
    alert(`나이를 잘 못 작성 하셨습니다.`);
  }
}
function ageCheck2(){
  const input =document.getElementById("inputAge");
  const age =Number(input.value);
  let result; 
  if(age <0 || age > 120){
    result ="나이를 잘 못 작성 하셨습니다.";
  }else if(age <=13){
    result ="어린이";
  }else if(age <=19){
    result ="청소년";
  }else{
    result ="성인";
  }
  alert(result);
}
/* 두 수 A, B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4(){
  const inputA =document.getElementById('inputA');
  const inputB =document.getElementById('inputB');
  // "string".length : 문자열의 길이 반환
  if(inputA.value.length ===0 || inputB.value.length ===0){
    alert("입력되지 않은 값이 존재합니다.");
    return;
  }
  const v1 =Number(inputA.value);
  const v2 =Number(inputB.value);
  if(v1 < v2){
    alert("A 가 B 보다 작습니다.");
    return;
  }
  if(v1 % v2 ===0){
    alert(`${v1} 은(는) ${v2} 의 배수가 맞습니다.`);
    return;
  }
  alert(`${v1} 은(는) ${v2} 의 배수가 아닙니다.`);
}
/* 입력된 수가 3,4,5 가 맞는지 확인 */
function check5(){
  const input5 =document.getElementById('input5');
  let result; /* 결과값 */
  if(input5.value.length ===0){
    alert("숫자를 입력하세요.");
    return;
  }
  switch(Number(input5.value)){
    case 3: result ="3 입력"; break;
    case 4: result ="입력 4"; break;
    case 5: result ="5 입력"; break;
    default: result ="입력된 값이 3, 4, 5 가 아닙니다."; break;
  }
  alert(result);
  /* swith -> if else 로 변경 */
  let result2;
  if(Number(input5.value) ===3){
    result2 ="input : 3";
  }else if(Number(input5.value) ===4){
    result2 ="input : 4";
  }else if(Number(input5.value) ===5){
    result2 ="input : 5";
  }else{
    result2 ="input value : Not 3, 4, 5";
  }
  alert(result2);
}
/* switch 를 이용한 계산기 */
// Parameter(매개 변수) - 함수가 호출될 때 전달된 값(Argument)을 저장
function calc(op){
  const number1 =document.getElementById('number1');
  const number2 =document.getElementById('number2');
  if(number1.value.length ===0 || number2.value.length ===0){
    alert('숫자를 입력하세요.');
    return;
  }
  const n1 =Number(number1.value);
  const n2 =Number(number2.value);
  let result;
  switch(op){
    case '+': result =n1+n2; break;
    case '-': result =n1-n2; break;
    case '*': result =n1*n2; break;
    case '/': result =n1/n2; break;
    case '%': result =n1%n2; break;
    default : result ="잘못된 연산자."; break;
  }
  // 결과를 #calcResult 내용으로 출력
  document.getElementById('calcResult').innerHTML =result;
}
/* 입력 받은 월(달)의 알맞은 계절 출력(break;) */
function check6(){
  const input6 =document.getElementById('input6');
  if(input6.value.length ===0){
    alert('월(달)을 입력하세요.');
    return;
  }
  let result;
  switch(Number(input6.value)){
    case 3: case 4: case 5: result ='봄'; break;
    case 6: case 7: case 8: result ='여름'; break;
    case 9: case 10: case 10: result ='가을'; break; 
    case 12: case 1: case 2: result ='겨울'; break;
    default : result ='잘못 입력'; break;
  }
  alert(result);
}
