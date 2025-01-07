/* 구구단 표 만들기 */
function createTable(){
  const startinp =document.getElementById("start");
  const endinp =document.getElementById("end");
  const thead =document.getElementById("thead");
  const tbody =document.getElementById("tbody");
  const start =Number(startinp.value);
  const end =Number(endinp.value);
  // clear
  thead.innerHTML ="";
  tbody.innerHTML ="";
  if(startinp.value.length ===0 || endinp.value.length ===0){
    alert(`시작/종료 단을 입력 해주세요`);
    return;
  }
  if(start <=0 || end <=0){
    alert(`1 이상의 수만 입력 해주세요`);
    return;
  }
  if(start > end){
    alert(`시작 단보다 종료 단이 클 수 없습니다`);
    return;
  }

  let t_head ='<tr>';
  for(let i=start;i<=end;i++){
    t_head +=`<th>${i}단</th>`;
  }
  t_head +='</tr>';
  thead.innerHTML += t_head;

  for(let i=1;i<=9;i++){   
    let t_body ='<tr>'; 
    for(let j=start;j<=end;j++){
      t_body +=`<td>${j} X ${i} = ${i*j}</td>`; 
    }   
    t_body +='</tr>';  
    tbody.innerHTML += t_body;  
  } 
}