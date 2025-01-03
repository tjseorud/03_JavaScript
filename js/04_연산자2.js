/** 비교 연산자 */
function chexk1(){
  const num1 =100; /* number type */
  const num2 =100;
  const num3 =999;
  const str1 ="100";  /* string type */
  const str2 ="100";  
  const str3 ="999";
  console.log("동등,동일 비교");
  console.log("==,!=");
  console.log("num1==num2 : ",num1 ==num2);  /* true */
  console.log("num1==num3 : ",num1 ==num3);  /* false */
  console.log("num1!=num3 : ",num1 !=num3);  /* true */
  // number, string 동등 비교
  console.log("num1==str1 : ",num1 ==str1);  /* true */
  // string 동등 비교
  console.log("str1==str2 : ",str1 ==str2);  /* true */
  console.log("str1==str3 : ",str1 ==str3);  /* false */
  console.log("===,!==");
  // number 동일 비교
  console.log("num1===num2 : ",num1 ===num2);  /* true */
  console.log("num1===num3 : ",num1 ===num3);  /* false */
  console.log("num1!==num3 : ",num1 !==num3);  /* true */
  // number, string 동일 비교
  console.log("num1===str1 : ",num1 ===str1);  /* false */
  /* 초과, 미만, 이상, 이하 */
  console.log("num1>num2 : ",num1 >num2);  /* false */
  console.log("num1>=num2 : ",num1 >=num2);  /* true */
}
/** 홀짝 판별기 */
function oddEvenCheck(){
  const input1 =document.getElementById("input1");
  const val =Number(input1.value);
  console.log("짝수? : "+(val %2 ===0));
  console.log("홀수? : "+(val %2 ===1));
  
}
