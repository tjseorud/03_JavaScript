const result =document.querySelector('#result');
const numbers =document.querySelectorAll('.number');
const add =document.querySelector('#add');
const reset =document.querySelector('#reset');
const listView =document.querySelector('.listView');
for(let number of numbers){
  number.addEventListener('click',e=>{
    if(result.innerText.length >=11){
      return;
    }
    result.innerText +=e.target.innerText;
  });
}

add.addEventListener('click', ()=>{
  if(result.innerText.length ===0){
    return;
  }
  /**createElement 
   * @param tag : 태그명
   * @param name : 클래스명
  */
  const createEl =(tag, name)=>{  /* 요소 생성 */
    const el =document.createElement(tag);
    el.className =name;
    return el;
  }
  const div =createEl('div','list');
  const span1 =createEl('span','saveList');
  const span2 =createEl('span','starList');
  const span3 =createEl('span','removeList');
  span1.innerText +=result.innerText +' ';
  span2.innerText +="☆" +' ';
  span2.addEventListener('click',()=>{
    
  });
  span3.innerHTML +="&times;";
  span3.addEventListener('click',e=>{ 
    e.target.parentElement.remove();
  });
  div.append(span1,span2,span3);
  listView.append(div);
  result.innerText ='';
});

reset.addEventListener('click',()=>{
  result.innerText ='';
});