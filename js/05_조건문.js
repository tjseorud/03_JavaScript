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