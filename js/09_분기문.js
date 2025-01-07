/**break */
function check1(){
  const stopNumber =Number(prompt("1-20 사이 멈추고 싶은 숫자 입력"));
  for(let i=1;i<=20;i++){
    console.log(i);
    if(i==stopNumber){
      break;
    }
  }
}
/**무한 루프 멈추기 */
function check2(){
  let i=1;
  while(i==100){
    break;
  }
}
function check3(){
  let sum =0;
  while(true){
    const num =prompt("숫자 입력(취소시 종료)");
    if(num===null){
      break;
    }
    sum +=Number(num);
  }
  alert(`합계 : ${sum}`);
}
/**중첩 반복문 break */
function check4(){
  for(let i=1;i<=3;i++){
    let res ='';
    for(let j=1;j<=5;j++){
      res +=j;
      if(j===4){
        break;
      }
    }
    if(i===2){
      break;
    }
    console.log(res);
  }
}
/**continue */
function check5(){
  // 1-20 1++ 반복문을 이용해서 출력
  // 단, 3,5의 배수는 건너뛰기
  for(i=1;i<=20;i++){
    // 1) Not continue
    if(i%3!=0 && i%5!=0){
      console.log(i);
    }
    // 2) continue
    if(i%3==0 || i%5==0){
      continue;
    }
    console.log(i);
  }
}
/**continue 2 */
function check6(){
  // - 123456789 를 5줄 출력
  // 단, 1번줄 출력시 1제외
  // 단, 2번줄 출력시 2제외
  // 단, 3번줄 출력시 3제외
  // 단, 4번줄 출력시 4제외
  // 단, 5번줄 출력시 5제외
  for(i=1;i<=5;i++){
    let result="";
    for(j=1;j<=9;j++){     
      if(j===i){
        continue;
      }
      result+=j;
    }
    console.log(result);
  }
/* "문자열".replace('검색어','바꾸기'); -> 문자열내에 검색어를 찾아서 '바꿀 단어로 변경 */
} 
/**up & down game */
function Game(){
  // Math.floor(실수) : 정수로 변환
  // Math.random() : 0.0-1.0 난수 발생(1.0 미만)
  const answer =Math.floor(Math.random()*200+1);
  let count=0;  /* 시도 횟수 */
  while(true){
    const input=prompt("1-200 사이 숫자 입력");  
    const value=Number(input);  
    count++;
    if(input===null){
      alert(`${count}번에서 포기 하셨습니다 (정답 : ${answer})`);
      break;
    }
    if(input==0){
      alert('다시 입력해주세요');
      continue;
    }
    if(value<1||value>200){
      alert('1-200 사이 입력해주세요');
      continue;
    }  
    if(count===7){
      alert(`7회로 실패 (정답 : ${answer})`);
      break;
    }
    if(value==answer){
      alert(`정답 : ${answer} / 시도 횟수 : ${count}`);
      break;
    }
    if(value>answer){
      alert('[ DOWN ] 현재 '+count+'회');
    }else{
      alert('[ UP ] 현재 '+count+'회');
    }  
  }
}