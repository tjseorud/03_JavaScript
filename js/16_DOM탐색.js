/* Node 탐색 확인 */
const checkBtn1 =document.querySelector('#checkBtn1');
/* Event : 사건 
 * EventListener :  */
checkBtn1.addEventListener('click',()=>{
  const test1 =document.querySelector('#test1');
  /* 요소.childNodes : 모든 자식 노드 반환(NodeList, 유사배열) */
  const list =test1.childNodes;
  console.log("list : ",list);  /* -> 요소(태그), TEXT(엔터, 띄어쓰기, 글자), 주석comment */
  /* 원하는 자식노드 선택(index) */
  console.log("list[3] : ",list[3]);
  /* 요소.parentNode : 부모 노드 탐색 */
  const li1 =document.querySelector('#li1');
  const parent =li1.parentNode;
  console.log("parent : ",parent);
  /* 요소.fiestchild : 첫 번째 자식 노드 탐색 */
  /* 요소.lastChild : 마지막 자식 노드 탐색 */
  console.log("parent.firstChild : ",parent.firstChild);
  console.log("parent.lastChild : ",parent.lastChild);
  // parent의 마지막 자식 노드의 배경색을 pink
  parent.lastChild.style.backgroundColor ='pink';
  /* 요소.previousSibling : 이전 형제 노드 탐색 */
  /* 요소.nextSibling : 다음 형제 노드 탐색 */
  // list[9]의 다음, 다음 형제 노드 탐색
  console.log(list[9].nextSibling.nextSibling); /* list[11] */
  // list[5]의 이전, 이전 형제 노드 탐색
  console.log(list[5].previousSibling.previousSibling); /* list[3] */
  // <a href="#">4번</a> 글자색 red
  parent.lastChild.childNodes[1].style.color ='red';
});

/* Element 탐색 확인 */
const checkBtn2 =document.querySelector('#checkBtn2');
checkBtn2.addEventListener('click',()=>{
  // #li2
  const li2 =document.querySelector('#li2'); 
  // #li2의 부모 요소 선택(parentElement)
  const parent =li2.parentElement;
  console.log("parent : ",parent);
  // 모든 자식 요소 선택(children)
  console.log("children : ",parent.children);
  // 첫 번째 자식 요소 선택(firstElementChild)
  console.log("firstElementChild : ",parent.firstElementChild);
  // 마지막 자식 요소 선택(lastElementChild)
  console.log("lastElementChild : ",parent.lastElementChild);
  // parent의 1번 index 자식의 이전 형제 요소(previousElementSibling)
  console.log(parent.children[1].previousElementSibling);
  // parent의 1번 index 자식의 다음 형제 요소(nextElementSibling)
  console.log(parent.children[1].nextElementSibling);
});