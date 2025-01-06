/** console 1 2 3 4 5 출력 */
function check(){
  for(let i=1; i<=5; i++){
    console.log(i);
  }
}
/** console 1-10 까지 출력 */
function check2(){
  for(let i=1;i<=10;i++){
    console.log(i);
  }
}
/** console 5-13 까지 출력 */
function check3(){
  for(let i=5;i<=13;i++){
    console.log(i);
  }
}
/** console 1-7 까지 한 줄로 출력 */
function check4(){
  let result ="";
  for(let i=1;i<8;i++){    
    result +=i;    
  }
  console.log(result);
}
/** console 4-11 까지 한 줄로 출력 */
function check5(){
  let result /* ="" */; 
  /* result ="";
    -> 변수 선언시 아무런 값도 대입하지 않으면 undefined
    -> undefined 는 산술 연산 불가 -> 연산시 NaN 값 반환 */
  for(let i=4;i<=11;i++){    
    result +=i;    
  }
  console.log(result);
}
/** 1-10 까지 증가한 숫자의 합 구하기 */
function check6(){
  let sum =0; 
  for(let i=1;i<=10;i++){    
    sum +=i;    
  }
  console.log(sum);
}
/** 입력 받은 값 사이 정수 값들의 합 구하기 */
function check7(){
  const a =Number(document.getElementById("input7a").value);
  const b =Number(document.getElementById("input7b").value); 
  let sum =0; 
  for(let i=a; i<=b; i++){
    sum +=i;
  }
  alert(`${a} 부터 ${b} 사이 정수 합 : ${sum}`);
}
/** 1-10 까지 2씩 증가한 숫자 출력 + 합계 구하기 */
function check8(){
  let sum =0;
  for(let i=1; i<=10 ;i+=2){
    console.log(i);
    sum +=i;
  }
  console.log("합계 : ",sum);   
}
/** 3-30 까지 3의 배수만 출력하기 */
function check9(){
  // 1)
  let result ="";
  for(let i=3; i<=30 ;i+=3){
    result +=i +" ";
  }
  console.log(result);   
  // 2)
  let result2 ="";
  for(let i=3; i<=30; i++){
    if(i%3 ===0){
      result2 +=i +" ";
    }
  }
  console.log(result2);
}
/** 입력 받은 범위 내 지정된 수의 배수를 출력(한 줄), 합계 구하기 */
function check10(){
  const start =Number(document.getElementById("start10").value);
  const end =Number(document.getElementById("end10").value);
  const multiple =Number(document.getElementById("multiple10").value);
  let result ="";
  let sum =0;
  for(let i=start; i<=end; i++){
    if(i %multiple ===0){
      result +=i +" "; 
      sum +=i;
    }
  }
  console.log(result);
  console.log("합계 : ",sum);
}
/** 구구단 2단 출력하기 */
function check11(){
  for(let i=1; i<=9; i++){
    console.log(`2 X ${i} = ${i*2}`);
  }
}
/** 입력 받은 단의 구구단 출력하기 */
function check12(){
  const dan12 =document.getElementById("dan12");
  const dan =Number(dan12.value);
  if(dan12.value.length ===0){
    alert("단을 입력 해주세요");
    return;
  }
  if(dan <2 || dan >9){
    alert("2-9단 사이만 입력 해주세요");
    return;
  }
  for(let i=1; i<=9; i++){
    console.log(`${dan} X ${i} = ${dan*i}`);
  }
}
/** 10-1 까지 1씩 감소한 숫자 출력 */
function check13(){
  for(let i=10; i>=1; i--){
    console.log(i);
  }
}
/** 20-3 까지 3씩 감소한 숫자 출력 */
function check14(){
  for(let i=20; i>3; i-=3){
    console.log(i);
  }
}
/** 구구단 3단 리버스 출력하기 */
function check15(){
  for(let i=9; i>=1; i--){
    console.log(`3 X ${i} = ${i*3}`);
  }
}
/** 5의 배수마다 '@', 10의 배수마다 줄바꿈하면서 출력하기 */
function check16(){
  let result="";
  for(let i=1; i<=30 ;i++){    
    if(i %5 ===0){
      result +="@ ";
    }else{
      result +=i +" ";
    }
    if(i %10 ===0){
      result +="<br>";
    } 
  }
  document.getElementById("result16").innerHTML =result;  /* result16 print */// innerText  
}