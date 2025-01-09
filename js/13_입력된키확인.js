/**준비한 이미지 파일명을 배열에 저장 */
const images =['Q.jpg','W.jpg','E.jpg','R.jpg','T.jpg','Y.jpg'];
// .class가 key 인 요소를 모두 얻어와 keysdp 저장
const keys =document.querySelectorAll('.key');
/* HTML 문서 자체에 keydown Event Listener 추가 */
document.addEventListener('keydown',function(e){
  // 매개 변수 e : 발생한 이벤트 관련 정보를 저장한 객체
  // e.key : 어떤 key가 눌렸는지 출력
  // console.log(e);
  // console.log(e.key);

  /* string.toUpperCase() : 대문자로 변환 */
  /* string.toLowerCase() : 소문자로 변환 */
  let index;  /* index를 저장 */
  switch(e.key.toLowerCase()){
    case 'q': index =0; break;
    case 'w': index =1; break;
    case 'e': index =2; break;
    case 'r': index =3; break;
    default: return;  /* 다른 키 입력시 함수 종료 */
  }
  // 눌러진 키의 배경 이미지를 변경
  keys[index].style.backgroundImage =`url('../images/${images[index]}')`;
});
/* keyup 배경 이미지 제거 */
document.addEventListener('keyup',function(e){
  let index;  /* index를 저장 */
  switch(e.key.toLowerCase()){
    case 'q': index =0; break;
    case 'w': index =1; break;
    case 'e': index =2; break;
    case 'r': index =3; break;
    default: return;  /* 다른 키 입력시 함수 종료 */
  }
  keys[index].style.backgroundImage ='none';  /* 배경 이미지 제거 */
});

/**마우스 커서를 따라다니는 이미지 */
const cursorImage =document.querySelector('#cursorImage');
// 문서 자체에 마우스가 움직였을 때(mousemove)에 대한 동작
document.addEventListener('mousemove',function(e){
  // console.log(e);
  cursorImage.style.left =`${e.pageX + 0}px`;
  cursorImage.style.top =`${e.pageY + 0}px`;
});
