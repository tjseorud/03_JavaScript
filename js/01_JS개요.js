/* 외부에 작성된 .js 파일 */
//console.log() : 개발자 도구 콘솔 내부 내용 기록
console.log('01_JS개요.js 파일 연결됨');
/* 
  document : html 문서
  querySelector : css 선택자를 이용해 요소 선택
*/
const body =document.querySelector('body'); /* js를 이용하서 CSS를 변경하면 inline-style로 적용 */
// 라이트 모드
  function lightMode(){
    body.style.backgroundColor = 'white'; /* 배경색 */
    body.style.color = 'black'; /* 글자색 */
  }
// 다크 모드
function darkMode(){
  body.style.backgroundColor = 'black'; /* 배경색 */
  body.style.color = 'white'; /* 글자색 */
}