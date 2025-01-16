/* 요소 속성(Attribute) 관련 */
const btn1 =document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
  const input1 =document.querySelector('#input1');
  console.log("input의 name 속성 값 : ",input1.getAttribute('name')); /* 요소.getAttribute('속성명') : 속성값 얻어오기 */
  input1.setAttribute('type','checkbox'); /* 요소.setAttribute('속성명','속성값') : 속성값 설정(추가) -> 체크박스로 변경됨 */
  input1.setAttribute('class','big'); /* class 속성 값을 "big"으로 설정  */
  /* JS 속성 설정 방법 중 class 관련 
   * + CSS의 class 기반 설계를 이용해서 
   * HTML 요소의 스타일을 변경할 수 있다 */

  /* 이미 같은 속성이면 덮어쓰기 */
  input1.setAttribute('type','number'); 
  input1.setAttribute('class','bg-skyblue'); 

  input1.removeAttribute('class'); /* 요소.removeAttribute('속성명') : class 속성 제거 */
  /* 요소.hasAttribute('속성명') : 속성 존재 여부 확인(T/F) */
  if(!input1.hasAttribute('placeholder')){  /* placeholder 속성이 없을 경우 */
    input1.setAttribute('placeholder','placeholder add');
  }else{  /* 있을 경우 */
    input1.removeAttribute('placeholder');
  }
});

/* 요소 속성에 직접 접근 */
const btn2 =document.querySelector('#btn2');
btn2.addEventListener('click',()=>{
  /* [tip] 
   * 브라우저 콘솔에서 특정 요소가 가지고있는 DOM 속성을 직접 확인하고 싶은 경우
   * -> 복수 형태로 요소를 얻어오는 
   * querySelectorAll(), getElementsByClassName() 등을 이용
  */
  const input2 =document.querySelectorAll('#input2');
  const div2 =document.querySelectorAll('#div2');
  console.log(input2);
  console.log(div2);
  console.log(input2[0].getAttribute('id'));  /* id 얻어오기 */
  console.log(input2[0].id);
  console.log('#input2의 name : ',input2[0].getAttribute('name'));  /* name 얻어오기 */
  console.log('#input2의 name : ',input2[0].name);
  console.log('#div2의 name : ',div2[0].name);
  console.log('#input2의 value : ',input2[0].getAttribute('value'));  /* value 얻어오기 */
  console.log('#input2의 value : ',input2[0].value);
  console.log('#div2의 value : ',div2[0].value);
});

/* classList Test */
const addBtn =document.querySelector('#addBtn');
const closeBtn =document.querySelector('#closeBtn');
const btnContainer =document.querySelector('.btn-container');
addBtn.addEventListener('click',()=>{ /* 추가 버튼 클릭시 */
  /* 요소.classList.contains('클래스명');
      -> 요소에 클래스가 포함되어 있으면 true, 없으면 false */
  console.log(btnContainer.classList.contains('hidden'));  
  if(btnContainer.classList.contains('hidden')){  /* .btn-container 가 .hidden 포함되어 있을 경우 */
    /* 요소.classList.remove('클래스1'[, ...])
        -> 요소에 클래스를 제거(여러 클래스 한번에 제거 가능) */
    btnContainer.classList.remove('hidden');  /* .hidden 제거 */
    /* 요소.classList.add('클래스1'[, ...])
        -> 요소에 클래스를 추가(여러 클래스 한번에 추가 가능) */
    addBtn.classList.add('hidden');  /* .hidden 추가 */
  }
});
closeBtn.addEventListener('click',()=>{ /* 종료 버튼 클릭시 */
  if(!btnContainer.classList.contains('hidden')){  /* .btn-container 가 .hidden 포함되어 있지 않을 경우 */
    btnContainer.classList.add('hidden');  /* .hidden 추가 */
    addBtn.classList.remove('hidden');  /* .hidden 제거 */
  }
});
/* 클래스를 이용한 CSS 스타일 제어하는 방법이 제일 많이 사용 
 * -> HTML 복잡도가 낮아짐
 * 
 * - 요소.style.css 속성 방법은  
 *   inline-style로 적용되기 때문에 
 *   HTML의 복잡도가 늘어나는 문제가 발생
 * 
 *   단, class를 이용한 css를 덮어 씌울 목적인 경우 사용 
 *   * css 선택자 우선순위 참고(1에 가까울 수록 우선순위 높음)
 *    1) !inportant
 *    2) inline-style
 *    3) id
 *    4) class
 *    5) tag   
*/
addBtn.addEventListener('click',()=>{ 
  const container =document.querySelector('.container-3');
  /* inline-style로 css 변경 */
  // container.style.backgroundColor ='pink';
  // container.style.border ='5px double red';
  // container.style.width ='300px';
  // container.style.height ='150px';

  /* class를 추가하여 css 변경 */
  container.classList.add('test');
});
/* red, yellow, green 버튼 클릭시 */
const container3 =document.querySelector('.container-3');
const btns =document.querySelectorAll('.btn');
// 향상된 for
btns.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    const color =btn.innerText; /* 버튼에 작성된 내용(색상) */
    const classExist =container3.classList.contains(`bg-${color}`); /* 기존에 클릭한 색상 클래스가 존재하는지 확인(T/F) */
    /* .container3의 클래스 모두 지우고 .container3 를 추가 */
    container3.removeAttribute('class');
    container3.classList.add('container-3');
    if(!classExist){  /* classExist === false */
      /* 요소.classList.toggle('클래스명')
          -> 요소에 클래스가 있으면 제거, 없으면 추가 */
      container3.classList.toggle(`bg-${color}`);
    }
  });
});

/* 수정 버튼 클릭시 */
const modifyBtn =document.querySelector('#modifyBtn');
modifyBtn.addEventListener('click',()=>{  
  /* .bg-green <> .bg-red 변경하기() */
  if(modifyBtn.classList.contains('bg-green')){
    modifyBtn.classList.replace('bg-green','bg-red');  /* bg-green -> bg-red 변경 */
  }else{
    modifyBtn.classList.replace('bg-red','bg-green');  /* bg-red -> bg-green 변경 */
  }
});