const resName =document.querySelector('#resName');
const resNameInput =document.querySelector('#resNameInput');
const updataBtn =document.querySelector('#updata');
const addBtn =document.querySelector('#add');
const deleteBtn =document.querySelector('#delete');
const exitBtn =document.querySelector('#exit');
const btnContainer =document.querySelector('.btn-container');

/* 식당명 set */
resName.addEventListener('click',()=>{
  resName.classList.add('res-name-hidden');         /* span hidden */
  resNameInput.classList.remove('res-name-hidden'); /* input show */
  resNameInput.focus();  /* input 포커스 맞추기 */
});
resNameInput.addEventListener('blur',()=>{  // #resNameInputdl 포커스를 잃었을 때(blur)
  resName.classList.remove('res-name-hidden');      /* span show */
  resNameInput.classList.add('res-name-hidden');    /* input hidden */
  if(resNameInput.value.trim() ===''){    /* input에 입력된 값이 없으면 */
    resNameInput.value ="식당명을 입력하세요";
    return;
  }
  resName.innerText =resNameInput.value;  /* input에 입력한 값 span에 넣기 */
});

/* 버튼 set */
updataBtn.addEventListener('click',()=>{  /* 수정 버튼 클릭 시 */
  normalContainer.classList.toggle('b-hidden');
  editContainer.classList.toggle('b-hidden');
  const menus =document.querySelectorAll('.menu');  /* .menu 얻어오기 */
  menus.forEach(item =>{  /* 모든 .menu 순차 접근 */
    /* 기존 메뉴판에 작성된 메뉴, 가격 얻어오기 */
    const menuName =item.children[0].innerText;
    const menuPrice =item.children[1].innerText.replace('원','');
    /* .menu 내부에 추가될 input요소를 모아둔 JS객체 얻어오기 */
    const menuContent =createMenuConent();
    // 삼항 연산자
    // -> 조건식 ? true인 경우 : false인 경우;
    // -> 조건식 결과에 따라 둘 중 하나를 선택!
    menuContent.menuNameInput.value =(menuName ==='미입력') ? '' :menuName;  
    menuContent.menuPriceInput.value =(menuPrice ==='0') ? '' :menuPrice;
    item.innerHTML ='';  /* .menu(li) 내부 내용 삭제 */
    /* menuContent 객체에 저장된 input요소를 모두 .menu(li)의 자식으로 추가 */
    for(let key in menuContent){
      item.append(menuContent[key]);  
    }
  });
});
exitBtn.addEventListener('click',()=>{  /* 종료 버튼 클릭 시 */
  normalContainer.classList.toggle('b-hidden');
  editContainer.classList.toggle('b-hidden');
  const menus =document.querySelectorAll('.menu');  /* .menu 모두 얻어오기 */
  menus.forEach(item =>{  /* 모든 .menu 순차 접근 */
    const menuName =item.children[1].value;   
    const menuPrice =item.children[2].value; 
    const span1 =newEl('span',{},['menu-name']);  /* span 요소 생성 */
    const span2 =newEl('span',{},['menu-price']); 
    /* 삼항 연산자 : if ? true : false */
    span1.innerText =(menuName.trim() ==='' ? '미입력' :menuName);  /* 메뉴명이 없으면 '미입력' */
    span2.innerText =(menuPrice.trim() ==='' ? '0' :menuPrice) +'원';  /* 가격이 없으면 '0' */
    item.innerHTML ='';  /* .menu(li) 내부 내용 삭제 */
    item.append(span1,span2);  /* span 모두 .menu(li) 자식으로 추가 */
  });
});
addBtn.addEventListener('click',()=>{  /* 추가 버튼 클릭 시 + 최대 15개*/
  if(document.querySelectorAll('.menu').length >=15){ /* 메뉴가 15개 이상인지 확인 */
    alert('더 이상 메뉴를 추가 할 수 없습니다');
    return;
  }
  const li =newEl('li',{},['menu']);  /* li 요소 생성(+ class명: menu) */ 
  const menuContent =createMenuConent();  /* li에 들어갈 input 3개 만들어서 객체로 반환 받기 */
  for(let key in menuContent){  /* li에 menuContent 값을 모두 추가 */
    li.append(menuContent[key]);
  }
  menuContent.append(li);  /* li를 menuContent(메뉴판)에 추가 */
});
deleteBtn.addEventListener('click',()=>{
  const checked =document.querySelectorAll('.menu-check:checked');
  checked.forEach(item=>{ /* 체크된 요소 순차 접근 */
    item.parentElement.remove();  /* item(체크박스)의 부모(.menu)요소를 제거 */
  });
});

/* 요소 생성 + 속성 추가 + 클래스 추가 함수 */
/**document.createElement(tag) + setAttribute() + classList.add()
   * @param tag : 태그명
   * @param attr : 타입명
   * @param cls : 클래스명
  */
function newEl(tag, attr, cls){  
  const el =document.createElement(tag);
  for(let key in attr){ /* attr 매개변수는 객체 형태 */
    el.setAttribute(key, attr[key]);  /* 속성 추가 */ 
  }
  for(let className of cls){  /* cls 매개변수는 배열 형태 */
    el.classList.add(className);  /* 클래스 추가 */
  }
  return el;
}
/** 메뉴 내부 체크박스 요소를 만들어 객체로 반환하는 함수 */
function createMenuConent(){
  const check =newEl('input',{type:'checkbox'},['menu-check']); /* 체크박스 생성 */
  const menuNameInput =newEl(
    'input',{type:'text',placeholer:'메뉴명'},['menu-name-input']); /* 메뉴명 input 생성 */
  const menuPriceInput =newEl(
    'input',{type:'text',placeholer:'가격'},['menu-price-input']); /* 가격 input 생성 */
  return {'check':check, 'menuNameInput':menuNameInput, 'menuPriceInput':menuPriceInput};
}