/**전달인자 */
const input1 =document.querySelector('#input1');
const btn1 =document.querySelector('#btn1');
/**전달 받은 값이 -1/0/1 판별해서 출력
 * @param num : 전달 받은 숫자
*/
function testFn1(num){
  let str='';
  if(num===0){
    str='0';
  }else if(num>0){
    str="양수";
  }else{
    str="음수";
  }
  alert(`${num} 은(는) ${str} 입니다`);
}
/**#btn1 클릭시 */
btn1.addEventListener('click',function(){
  const val =Number(input1.value);  /* Number로 변환 */
  testFn1(val); /* 함수 호출 */
});

/**입력받은 수 3개 합 구하기 
 * @param arr : number만 저장된 배열
*/
function sumArr(arr){
  let sum =0;
  for(let num of arr){
    sum +=num;  /* arr[i]에 저장된 요소를 하나씩 num에 저장 */
  }
  alert(`합계 : ${sum}`);
}
const btn2 =document.querySelector('#btn2');
btn2.addEventListener('click',function(){
  const input2 =document.querySelectorAll("[name =input2]");
  const arr =[];
  for(let input of input2){
    /* arr.push(값) : 값을 배열 마지막 요소로 추가 */
    arr.push(Number(input.value));
  }
  sumArr(arr);
});

/**배수 확인 
 * @param a : 비교 되는 수
 * @param b : 확인해야하는 수
*/
function multipleFn(a,b){
  let str ='';
  if(a%b ===0){
    str ='맞습니다';
  }else{
    str ='아닙니다';
  }
  alert(`${a} 은(는) ${b} 의 배수가 ${str}`)
} 
const btn3 =document.querySelector('#btn3');
btn3.addEventListener('click',function(){
  const input3 =document.querySelectorAll("[name =input3]");
  const a =Number(input3[0].value);
  const b =Number(input3[1].value);  
  multipleFn(a,b);
});

/**rerturn 1 
 * num의 x제곱 값을 반환 함수
 * @param num : 곱해질 정수
 * @param x : 지수
 * @return : num의 x 제곱
*/
function pow(num, x){
  let result =1;  /* 곱셈, 나눗셈 시 영향 없는 수 ===1 */
  for(let i=0;i<x;i++){
    result *=num;
  }
  return result;  /* 함수 종료 + 값 */
}

/**제곱의 결과를 문자열로 변환 후 반환 함수 
 * @param num 
 * @param x
 * @param result : num 의 x 제곱
 * @return " num 의 x 제곱은 result 입니다"
*/
function createStr(num, x, result){
  return `${num} 의 ${x} 제곱은 ${result} 입니다`;
}
// 버튼 클릭시 prompt를 이용해 정수, 지수 입력 받고 결과 출력
const btn4 =document.querySelector('#btn4');
btn4.addEventListener('click',function(){
  const num =Number(prompt("정수 입력"));
  const x =Number(prompt("지수 입력"));
  alert(createStr(num, x, pow(num ,x)));
});

/**prompt에 입력된 값을 숫자 배열로 변환 후 반환하는 함수 
 * @param num 
*/
function createArr(num){
  const arr =[];
  for(let i=0;i<num;i++){
    const val =Number(prompt(`${i}번째 index에 대입할 숫자`));
    arr.push(val);
  }
  return arr;
}
const btn5 =document.querySelector('#btn5');
btn5.addEventListener('click',function(){
  const arr =createArr(5);  /* 생성된 배열을 반환 받아 저장 */
  sumArr(arr);  /* 함수 재사용 */
});

/**함수를 반환하는 함수 */
function createCounter(){
  let count =5; /* private */
  const fn =function(){
    count++;
    return count;
  }
  // console.log(fn());
  // console.log(fn());
  // console.log(fn());
  return fn;
}
const btn6 =document.querySelector('#btn6');
btn6.addEventListener('click',function(){
  const counter =createCounter(); /* 반환된 함수를 counter에 저장(함수명==counter) */
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
  console.log(counter());
});
/* Closure(클로저) 
 * - 외부 함수에서 종료된 내부 함수에 선언된 변수를 사용하는 기술
 * 특징 1 : 데이터 은닉(private) - 외부에서 직접할 수 없는 상태의 변수를 만들 수 있음
 * 특징 2 : 상태 유지 - 외부에서 함수를 수행한 후에도 함수의 변수 값이 변경 상태 유지 
*/

/**매개 변수/리턴으로 익명 함수 전달하기 */
const btn7 =document.querySelector('#btn7');
btn7.addEventListener('click',function(){
  const resultFn =testFn7(function(a,b){return a+b;});
  console.log("resultFn(3)",resultFn(3)); 
});
function testFn7(otherFn){
  return function(num){
    return otherFn(10,20)*num;
  }
}

/**화살표 함수(Arrow Function) */
const arrows =document.querySelectorAll('.arrow');
// 화살표 함수 기본 형태
arrows[0].addEventListener('click',() =>{
  const sumFn =(a,b,c) =>{return a+b+c;}  /* 전달 받은 값의 합을 반환 함수 */
  alert(sumFn(50,99,1234));
});
// 매개변수가 1개인 경우
arrows[1].addEventListener('click',() =>{
  const square =num =>{return num*num;}  /* 2제곱 반환 * () 생략 가능 */
  alert(square(77));
});
// {} 내 코드가 1줄만 작성된 경우
arrows[2].addEventListener('click',() =>{
  const print =str =>console.log(str);  /* (), {} 생략 가능 */
  print("Hello JS");
  const doubleFn =num =>num*2;  /* (), {}, return 생략 가능 */
  print(doubleFn(3));
});
// object 타입을 return 하는 경우
arrows[3].addEventListener('click',() =>{
  const fn1 =() => [1,2,3]; /* 배열 반환(배열은 {}, return 생략 가능) */
  console.log(fn1());
  // *{k:v, k:v} === JS 객체
  const fn2 =() => {return {name:"홍길동",age:20}}; /* 객체 반환(return, {} 생략시 구문 오류 발생) */
  console.log(fn2());
});

/**function(){}, ()=>{} 차이점 */
/* function(){} 의 this */
document.querySelector('#btn8').addEventListener('click',function(){console.log(this);}); /* 이벤트가 발생한 요소 */
/* () =>{} 의 this */
document.querySelector('#btn9').addEventListener('click',() =>{console.log(this);});  /* === window 객체 */
/* window 객체
 * - 창(브라우저) 자체를 나타내는 객체
 * - 창(브라우저) 관련 기능을 제공(alert, prompt, setTimeout, setInterval, open, ...)
 */ 

/**즉시 실행 함수 */ 
const str ="A"; /* 전역 변수 */
console.log(str); /* A */
(function(){
  const str ="B"; /* {} 내 지역변수 */
  console.log(str); /* B */
})();
