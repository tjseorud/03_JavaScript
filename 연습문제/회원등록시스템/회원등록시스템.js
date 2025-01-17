const seletebtn = document.querySelector('#selete');
const deletebtn = document.querySelector('#delete');
const table =document.querySelector('.userTable');
const uId =document.querySelector('#userId');
const uName =document.querySelector('#userName');
const uHp =document.querySelector('#userPhone');

seletebtn.addEventListener('click', () => {  
  const values =[uId.value, uName.value, uHp.value];
  for(let val of values){
    if(val.trim() ===''){ /* trim() 좌우 공백 제거 */
      alert('모든 값을 입력해주세요');
      return;
    }
  }
  const tr =document.createElement('tr');
  const td1 =document.createElement('td');
  const td2 =addEl('td', values[0]);
  const td3 =addEl('td', values[1]);
  const td4 =addEl('td', values[2]);
  const input =addInpEl('input', 'checkbox', 'checkList');
  td1.append(input);
  tr.append(td1, td2, td3, td4);
  table.append(tr);
});
deletebtn.addEventListener('click', () => {

});

/**document.createElement()
 * @param tag - 태그 이름
 * @param text - 내용
 */
function addEl(tag,text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}
/**document.createElement()
 * @param tag - 태그 이름
 * @param type - 클래스 이름
 * @param id - 아이디
 */
function addInpEl(tag, type, id) {
  const el = document.createElement(tag);
  el.type = type;
  el.id = id;
  return el;
}
