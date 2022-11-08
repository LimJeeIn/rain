const BG_WIDTH = 800;
const BG_HEIGHT = 500;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

// 브라우저에서는 하나의 자바스크립트로 인식한다
// html 파일에 적힌 순서대로 인지한다

// 용사에 대한 엘리먼트를 미리 저장시킨다
const heroElement = document.getElementById("hero");
console.log(heroElement);

// ghost.js에서 "div" css를 갖고오기 위함의 공통 코드
// bg 요소 접근하고 bgElement 변수로 저장
const bgElement = document.getElementById("bg");
