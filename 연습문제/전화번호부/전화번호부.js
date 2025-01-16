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
  const text =createEl('span','saveList');
  const star =createEl('span','starList');
  const span =createEl('span','removeList');
  text.innerText +=result.innerText +' ';
  star.innerText +="☆";
  star.addEventListener('click',()=>{
    if(star.innerText ==='☆'){
      star.innerText ='★';
      star.style.color ='orange';
      text.style.color ='red';
    }else{
      star.innerText ='☆';
      star.style.color ='black';
      text.style.color ='black';
    }
  });
  span.innerHTML +="&times;";
  span.addEventListener('click',e=>{ 
    e.target.parentElement.remove();
  });
  div.append(text,star,span);
  listView.append(div);
  result.innerText ='';
});

reset.addEventListener('click',()=>{
  result.innerText ='';
});