/* 변수 선언 값 대입 */
var number1 =10;
var number2 =20;
/* var : 변수(값 변경 ok), 변수명 중복 ok */
function varCheck(){
  var menu ="제육볶음";
  console.log("menu : ",menu);  //제육볶음
  // 값 변경 확인(var 키워드 X)
  menu ="라면";
  console.log("menu : ",menu);  //라면
  // 변수명 중복 확인(var 키워드 O)
  menu ="김밥";
  console.log("menu : ",menu);  //김밥
  // var 사용의 문제점 -> 사용 중 이던 변수를 실수로 없애는 경우 자꾸 발생
}
/* let : 변수(값 변경 ok), 변수명 중복 X (var 문제점 해결) */
function letCheck(){
  let name ="홍길동";
  console.log("name : ",name);
  // 값 변경 확인
  name ="장보고";
  console.log("name : ",name);
  // 변수명 중복 X
  // let name ="이순신";
  // * 해결 방법 : 다른이름의 변수에 저장
  let name2 ="이순신";
  console.log("name2 : ",name2);
}
/* const(constant : 상수) :상수(값 변경 X), 변수명 중복 X */
function constCheck(){
  const nationalCode =82;
  console.log("nationalCode : ",nationalCode);
  // 상수(값 변경 X)
  // nationalCode =1;
  // console.log("nationalCode : ",nationalCode);
  // Uncaught TypeError: Assignment to constant variable.
  // 변수명 중복 X
  // const nationalCode =82; 
}
/* var, let, const 범위(scope) */
function scopeTest1() /* 함수 선언 */
{ /* 함수 정의 시작 */
  var num1 =100;
  // if : 만약에
  if(num1 ===100){  /* : 만약에 num1과 100 이 같다면 {}블럭 실행 */
    var num2 =200;  /* 함수 레벨 범위 -> var는 함수 정의 사작-끝 사이에 존재하면 -> 어디든 사용가능(함수 종료 직전까지) */
  }
  console.log("num2 : ",num2);
  /* let */
  let num3 =300;
  if(num3 ===300){
    let num4 =400;  /* {}내부에서 변수 선언 -> let은 {}블럭 내부에서만 사용가능 -> {}블럭을 벗어나면 사용 불가 */
  }
  console.log("num4 : ",num4)
  // Uncaught ReferenceError: num4 is not defined
} /* 함수 정의 종료 */
/* 변수 선언 위치에 따른 범위 */
/* 
  1. 전역(global) 변수
    - 어디서든 사용 가능
  2. 지역(local) 변수
    - {}블럭 내부에 작성된 변수
*/
const global1="전역 변수1"; /* 전역 변수 선언(기본적으로 {}블럭 밖에 선언) */
function scopeTest2(){
  const fn1 ="함수 지역 변수1";
  let fn2="함수 지역 변수2";
  const temp =1;

  console.log("if 실행 전 fn2 : ",fn2);
  if(temp ===1){
    console.log("if 내부에서 fn2 : ",fn2); /* {}외부 -> 내부 변수 사용 확인 */
    console.log("전역 변수 global1 : ",global1); /* {{}}외부 -> 내부 변수 사용 확인 */
    // {}외부 변수 값을 {}내부에서 변경할 경우 
    fn2="변경된 fn2";
    console.log("fn2변경 확인 : ",fn2);
  }
  console.log("if 종료 후 fn2 값 : ",fn2);

  const name ="홍길동";
  console.log("if 전 : ",name);
  if(temp===1){
    const name ="김미영"; /* {}외부, 내부 변수명이 같을 경우 -> {}내부가 우선 순위 */
    console.log("if 중 : ",name);
  }
  console.log("if 후 : ",name);
}
/*  */
function typeCheck(){
  // typeof : 변수/값의 자료형을 확인하는 연산자
  // undefined : 정의되지 않음 == 변수에 값 대입 X
  let undef;
  console.log("undef : ",undef,typeof undef);

  // string(문자열) : '',"" 형태로 작덩된 리터럴(값)
  const name ="admin";
  const phone ='01123456789';
  console.log("name : ",name,typeof name);
  console.log("phone : ",phone,typeof phone);

  // number(숫자) : 정수, 실수 형태의 값(리터럴)
  const age =25;
  const height =164;
  const sight =null;
  console.log("age : ",age,typeof age);
  console.log("height : ",height,typeof height);
  console.log("sight : ",sight,typeof sight);

  // boolean(논리값) : true(참), false(거짓)
  const bool1 =true;
  const bool2 =false;
  console.log("bool1 : ",bool1,typeof bool1);
  console.log("bool2 : ",bool2,typeof bool2);

  // object(객체) : 여러 값을 저장할 수 있는 형태
  // 1) 배열(Array) : 변수의 묶음, 묶인 변수에 0 부터1씩 증가하는 숫자를 부여(index)
  const numbers=[11,22,33]; /* 배열 생성 */
  console.log("numbers : ",numbers,typeof numbers); /* 배열 전체 타입 검사 : object */
  // 배열 내 요소(저장된 값) 하나씩 꺼내기
  console.log("numbers[0] : ",numbers[0],typeof numbers[0]);
  console.log("numbers[1] : ",numbers[1],typeof numbers[1]);
  console.log("numbers[2] : ",numbers[2],typeof numbers[2]);
  // 2) JS 객체 {k:v, k:v, k:v} 
  // k(key)== 값을 구분하는 name(변수명과 비슷)
  // v(value)== 값(변수에 대입되는 값)
  const user ={
    id:"user01",
    pw:"pass01",
    point:13000
  }
  console.log("user : ",user,typeof user); 
  // JS 객체 내 요소(저장된 값) 하나씩 꺼내기
  console.log("user['id'] : ",user['id'],typeof user['id']);
  console.log("user['pw'] : ",user['pw'],typeof user['pw']);
  console.log("user['point'] : ",user['point'],typeof user['point']);

  // function(함수) : 함수도 변수에 대입 가능
  const sumFn = function(a,b){
    return a+b;
  }
  console.log("sumFn : ",sumFn,typeof sumFn);
  console.log(sumFn(192,168));
    
}