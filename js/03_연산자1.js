/* HTML 문서에서 얻어온 값의 자료형은 string(문자열) */
/* 계산기 동작 코드 */
/* document : HTML 문서 
  .(점 연산자) : 내부 접근 연산자
  get : 얻다
  Element : HTML요소
  ById("input") : id 가 "input" 값인 */
const input1 =document.getElementById("input1");
const input2 =document.getElementById("input2");
const calcResult=document.getElementById("calcResult");
// Number(input.value)를 전역변수로 선언할 경우 페이지 로딩되는 시점에 값이 결정된다. -> number(input.value); == 0
const test1 =Number(input1.value);
const test2 =Number(input2.value);

/** (더하기 함수(DOC 주석, 함수 설명 작성용 주석)) */
function plusFn(){
  // input.valuel : #input 요소에 작성된  값(string) 얻어오기
  // Number('숫자형태 문자열') : '숫자형태 문자열' -> 숫자로 변환
  // 단, '숫자형태 문자열'이 아닐 경우 NaN(Not a Number)결과 반환
  const value1 =Number(input1.value);
  const value2 =Number(input2.value);
  console.log("두 수의 + : ",value1 +value2);
  // 결과(#calcResult)의 내용(innerText)으로 출력
  calcResult.innerText =value1+value2;
  /* 전역 변수 test1 - test2 확인*/
  console.log("test1 : ",test1);
  console.log("test2 : ",test2);
  console.log("test1 - test2  : ",test1 -test2);
  
}
/** 빼기 함수 */
function minusFn(){
  const value1 =Number(input1.value);
  const value2 =Number(input2.value);
  calcResult.innerText =value1 -value2;
}
/** 곱하기 함수 */
function multiFn(){
  const value1 =Number(input1.value);
  const value2 =Number(input2.value);
  calcResult.innerText =value1 *value2;
}
/** 나누기 함수 */
function divFn(){
  calcResult.innerText =Number(input1.value) /Number(input2.value);
}
/** 나머지 함수 */
function modFn(){
  calcResult.innerText =Number(input1.value) %Number(input2.value);
}
// ---------------------------------------------------------------
/* 산술 연산자 응용 */
const input3 =document.getElementById("input3");
const input4 =document.getElementById("input4");
const calcResult2 =document.getElementById("calcResult2");
/* 첫 번째 값 X2 */
function doubleFn(){
  calcResult2.innerText =Number(input3.value)*2;
}
/* 두 번째 값 제곱 */
function squareFn(){
  calcResult2.innerText =Number(input4.value) *Number(input4.value);
}
/* 모든 산술 연산 결과 일괄 출력 */
function allOperationFn(){
  const v1 =Number(input3.value);
  const v2 =Number(input4.value);
  // 각각의 연산결과 별도 저장
  const plus =v1 +v2;
  const minus =v1 -v2;
  const multi =v1 *v2;
  const div =v1 /v2;
  const mod =v1 %v2;
  // 요소 innerText ="문자열"; -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  //  - HTML 코드 해석 X
  // 요소 innerHTML ="문자열"; -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  //  - HTML 코드 해석 ok
  calcResult2.innerHTML="<ul>"
  +"<li>+ 결과 : "+plus +"</li>"
  +"<li>- 결과 : "+minus +"</li>"
  +"<li>* 결과 : "+multi +"</li>"
  +"<li>/ 결과 : "+div +"</li>"
  +"<li>% 결과 : "+mod +"</li>"
  +"</ul>";
}
/* 증감 연산자 */
const countResult =document.getElementById("countResult");
// ++
function increase(){
  // 요소.innerText="문자열"; -> "문자열" 화면 출력
  // 요소.innerText; -> 요소에 작성된 내용 얻어오기
  // 1)countResult 에 작성된 내용 얻어오기
  let count =Number(countResult.innerText);
  // 2) 얻어온 내용 1 증가 시켜 출력
  countResult.innerText =++count;
}
// --
function decrease(){
  let count =Number(countResult.innerText);
  countResult.innerText =--count;
}
/* 전위/후위 연산 확인 */
// 연산 : 컴퓨터가 코드/값을 읽고, 실행하는 행위 
function checkFn(){
  let num =100;
  // 전위 연산 : 다른 연산 보다도 최우선으로 실행
  console.log("++num",++num); /* 101 print */
  console.log("++num",++num); /* 102 print */
  console.log("++num",++num); /* 103 print */
  // 후위 연산 : 다른 연산 보다도 나중에 실행
  num =100;
  console.log("num++",num++); /* 100 print -> add 1 */
  console.log("num++",num++); /* 101 print -> add 1 */
  console.log("num++",num++); /* 102 print -> add 1 */
  console.log("num 확인",num); /* 103 */
  /* Q1 */
  let a =10;
  let b =5;
  let c =++a*b--;
  /* a 11 */
  /* b 4 */
  /* c 55 */
  console.log(a,b,c);
}