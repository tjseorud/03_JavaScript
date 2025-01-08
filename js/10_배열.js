/**Array */
function check1(){
  const arr1 =new Array();  /* 0 arr */
  const arr2 =new Array(3);  /* 3 arr*/
  const arr3 =[]; /* 0 arr */
  const arr4 =['사과','딸기','바나나']; /* 3 arr */

  console.log(arr1,arr2,arr3,arr4);
  // Array length
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);
  // Array[index]
  console.log(`arr4[0] : ${arr4[0]}`);
  console.log(`arr4[1] : ${arr4[1]}`);
  console.log(`arr4[2] : ${arr4[2]}`);
  // 존재하지 않는 index번째 접근 -> 오류 X
  console.log(`arr4[3] : ${arr4[3]}`);  /* undefined */
  // Array[index] = 값;  
  arr2[0] = 123;
  arr2[1] = '27day 임시공휴일';
  arr2[2] = true;
  // type check
  // 존재 하지 않는 index값 대입 -> true + 배열 길이가 자동으로 증가 
  arr2[3] = 'true';
  arr2[6] = 'true';

  console.log('arr2 : ',arr2);
}
/**Array for 1 */
function check2(){
  const weeks=['월','화','수','목','금','토','일']  
  /* 
    weeks.length ===7
    weeks start number : 0
    weeks end number : 6 === weeks.length-1
  */
  for(let i=0;i<weeks.length;i++){
    console.log(weeks[i]);
  }
  console.log(" ");
  for(let i=weeks.length-1;i>=0;i--){
    console.log(weeks[i]);
  }
}
/**Array for 2 */
function check3(){
  // prompt로 입력 받은 값을 Array에 순차적으로 초기화
  const arr=[];

  for(let i=0;i<4;i++){
    arr[i]=prompt(`${i}번째 저장할 값 입력`);
  }
  console.log(arr); 
}
/**Array for 3 */
function check4(){
  /* 
    prompt로 입력 받은 5값을 Array에 저장
    1) 저장된 값 출력
    2) 합계 출력
    3) 평균 출력
    4) 짝수번째 index의 합계 출력
    5) 홀수번째 index의 합계 출력
  */
  const arr=new Array(5);
  let sum=0;
  let oddSum=0;
  let evenSum=0;

  for(let i=0;i<arr.length;i++){
    arr[i]=Number(prompt(`${i}번째 저장할 값 입력`));
  }
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
    if(i%2===0){
      evenSum+=arr[i];
    }else{
      oddSum+=arr[i];
    }
  }
  console.log(arr);
  console.log('합계 : ',sum);
  console.log('평균 : ',sum/arr.length);
  console.log('짝수번 합계 : ',evenSum);
  console.log('홀수번 합계 : ',oddSum);
}
/**Array for 4 */
function check5(){
  /* 배열 길이를 입력 받고 각 요소에 0에서 배열 길이 미만의 난수를 저정 */
  const len=Number(prompt('생성할 Array 길이 입력'));
  const arr=new Array(len);
  
  for(let i=0;i<len;i++){
    const num=Math.floor(Math.random()*len);
    arr[i]=num;
  }
  console.log('결과 : ',arr);  
}
/**점심 메뉴 뽑기 */
function selectMenu(){
  const menus=['햄버거','샌드위치','우동','라면','김밥','돈까스','쌀국수','샐러드','빵'];
  const num=Math.floor(Math.random()*menus.length);
  // #menuResult
  document.getElementById('menuResult').innerText=menus[num];
}
/**로또 번호 생성기 */
/* Arr.includes(i) : () 내 값이 배열에 존재하면 true, false */
function creatLottoNumber(){
  const lotto=document.getElementById("lotto"); /* #lotto */
  lotto.innerHTML=""; /* delete */
  const arr=new Array();
  for(let i=0;i<6;i++){
    const num=Math.floor(Math.random()*45+1);
    if(arr.includes(num)){  /* 중복 검사 */
      i--;
      continue;
    }
    arr[i]=num;
    arr.sort(function(a,b){return a-b;}); /* arr.sort((a,b)=>a-b);  */
    // arr.sort((a,b)=>a-b);  
  }
  for(let i=0;i<arr.length;i++){
    lotto.innerHTML +=`<div>${arr[i]}</div>`;
  } 
}
/**2차원 Array 1 */
function check6(){
  const num1=10;
  const num2=20;
  const num3=30;
  // 1차원
  const arr1=[num1,num2,num3];
  const arr2=[40,50,60];
  const arr3=[70,80,90];
  // 2차원
  const dArr1=[[10,20,30],[40,50,60],[70,80,90]];
  const dArr2=[arr1,arr2,arr3];

  console.log(dArr1);
  console.log(dArr2);
  // Array index
  console.log('dArr2[0] ',dArr2[0]);
  console.log('dArr2[0].length ',dArr2[0].length);
  console.log('dArr2[1] ',dArr2[1]);
  console.log('dArr2[1].length ',dArr2[1].length);
  console.log('dArr2[2] ',dArr2[2]);
  console.log('dArr2[2].length ',dArr2[2].length);
  // 2차원 Array index
  console.log('dArr2.length ',dArr2.length);

  console.log('dArr2[0][2] ',dArr2[0][2]);  /* 0행 2열 */
  console.log('dArr2[1][1] ',dArr2[1][1]);  /* 1행 1열 */
  console.log('dArr2[2][0] ',dArr2[2][0]);  /* 2행 0열 */

  // 2차원 Array index를 이용 값 대입
  // 0행 0열, 1행 0열, 2행 0열 값을 *10 해서 대입
  dArr2[0][0]=dArr2[0][0]*10;
  dArr2[1][0]*=10;  /* 복합대입연산자 */
  dArr2[2][0]*=10;
}