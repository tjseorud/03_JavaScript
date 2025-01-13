const standard =document.querySelector('#standard');  /* 기준 box */
const btns =document.querySelectorAll('.btn');  /* btn 5개 */
let count =1; /* 요소 내용 */
// 모든 버튼에 클릭 이벤트 리스너 추가
for(let btn of btns){
  btn.addEventListener('click',(e)=>{
    /* e : 이벤트 정보가 담긴 객체
     * e.target : 이벤트가 발생한 객체 */
    const str =e.target.innerText;
    switch(str){
      case "prepend": 
        const span1 =document.createElement("span");  /* span 생성 */
        const test1 =document.createTextNode(count);  /* TextNode 생성 */      
        span1.appendChild(test1); /* 생성된 TextNode를 span1의 자식으로 추가 */
        span1.style.backgroundColor ="skyblue";  /* 배경색 추가 */
        standard.prepend(span1);  /* #standard 요소에 첫번째 자식으로 추가 */
        break;
      case "append":
        const span2 =document.createElement("span");
        const test2 =document.createTextNode(count);
        span2.appendChild(test2); /* span2의 자식으로 TextNode 추가 */
        span2.style.backgroundColor ="lightsalmon";
        standard.append(span2); /* #standard 요소에 마지막 자식으로 추가 */
        break;
      case "before":
        const div1 =document.createElement("div");  /* div 생성 */
        div1.className ="box"
        div1.style.backgroundColor ="orange";
        div1.innerText =count;  /* div의 내용으로 count 추가 (TextNode 사용 X) */
        standard.before(div1);  /* #standard 앞쪽에 요소를 추가 */
        break;
      case "after":
        const div2 =document.createElement("div");
        div2.className ="box";
        div2.style.backgroundColor ="springgreen";
        div2.innerText =count;
        standard.after(div2);  /* #standard 뒤쪽에 요소를 추가 */
        break;
      case "remove":
        const boxes =document.querySelectorAll('.box:not(#standard)');  /* .box중 #standard를 제외한 모두 선택 */
        const spans =document.querySelectorAll('#standard > span'); /* #standard의 모든 자식 span선택 */
        // boxes.remove() // arr.remove() -> 존재 X
        for(let box of boxes){
          box.remove(); /* 선택된 요소(.box) 삭제 */
        }
        for(let span of spans){
          span.remove(); /* 선택된 요소(#standard > span) 삭제 */
        }
        count =0;
        break;
      default : 
    }
    count++;  /* count 증가 */
  });
}