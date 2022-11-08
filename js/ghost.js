//유령을 js로 추가하는 부분

//유령 생성 함수
function createGhost() {
  // div를 ghostElement에 만든다
  const ghostElement = document.createElement("div");

  // div변수의style 값을 할당한다
  ghostElement.style.position = "absolute";
  ghostElement.style.top = "0px";

  let randomLeft = randomRange(0, BG_WIDTH - GHOST_WIDTH); //유령의 랜덤 숫자 반환 함수는 .left 이전에 호출하여 실행한다, 랜덤 수가 반환되어서 변수 저장을 해야한다, 0부터 ~ 배경 width - 유령 width = 어떠한 크기의 이미지든 범위 내에 위치 하게 된다, 이렇게 만들면 하나하나 수정하는게 아니라 settings 의 BG_WIDTH 변수 값만 바꾸고 싶은 이미지 크기로 수정하면 된다
  ghostElement.style.left = randomLeft + "px";

  // width,height,backgroud는 settings의 공통코드에서 가져온다 + "px"
  ghostElement.style.width = GHOST_WIDTH + "px";
  ghostElement.style.height = GHOST_HEIGHT + "px";
  ghostElement.style.background = "url(./images/ghost.png) no-repeat";

  // settings에서 공통코드로 #bg 로 접근한 변수 bgElement에 자식으로 ghostElement를 넣는다
  bgElement.appendChild(ghostElement);

  // 유령비 내리기 함수
  setInterval(function () {
    //1.고스트 요소에 접근
    //2.top 값 가져와서 숫자 추출 후에  10 + "px" 붙이기
    //   Number(ghostElement.style.top.split("px")[0]) -> "px"를 제외한 split로 새로 생성한 배열의 0번째인 숫자
    // 유령과 용사가 겹치는 top과 left 지점을 찾아옴
    let ghostTopNum = Number(ghostElement.style.top.split("px")[0]) + 10; // 유령을 10px 씩 움직이게 함
    let ghostLeftNum = Number(ghostElement.style.left.split("px")[0]);
    let heroLeftNum = Number(heroElement.style.left.split("px")[0]);

    console.log(0); // 콘솔 위치 순서 확인해보기 0,4,1,3,4  0,1,6,2,0,1,3,4,0,4,
    // 유령과 용사가 겹치는 top  위치조건
    // 배경 높이-(유령높이+영웅높이)보다 ghostTopNum(현재 유령top높이)가 크면
    // 즉 현재 유렁의 top이 접촉하는 순간이  배경높이-(유령+영웅 높이)보다 커지면(유령이 더 나아간다면) 유령을 죽인다
    if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_HEIGHT)) {
      // 유령과 용사가 겹치는 left 위치조건
      // 현재유령왼쪽위치보다 현재영웅왼쪽위치+영웅 width 값이 더 크고
      // 현재영웅왼쪽위치보다 현재유령왼쪽위치+유령 width 값이 더 클때
      console.log(1);
      if (
        ghostLeftNum < heroLeftNum + HERO_WIDTH &&
        heroLeftNum < ghostLeftNum + GHOST_WIDTH
      ) {
        killGhost(ghostElement); // 유령을 죽임
        console.log(2);
        return;
      }
      console.log(3);
    }
    console.log(4);
    //유령의 범위 조건
    //유령의 위치가 배경width-유령 width의 값보다 넘으면 멈춤
    if (ghostTopNum > BG_HEIGHT - GHOST_HEIGHT) {
      ghostElement.remove();
      return;
    }
    // 현재 고스트 요소의 top 값(숫자형태인)을 가져와 "px"를 붙여 ghostElement.style.top에 할당한다
    ghostElement.style.top = ghostTopNum + "px"; // 숫자열에는 바로 문자열 붙일수 있다
  }, 100);
}

console.log(5);
function killGhost(ghostElement) {
  ghostElement.style.backgroundPosition = "-45px";
  console.log(6);
  setTimeout(function () {
    ghostElement.remove();
    console.log(7);
  }, 500);
}

createGhost();

// 유령 생성 함수를 3초마다 생성한다, 유령 무한생성
setInterval(createGhost, 3000);

// 유령의 랜덤 숫자 반환 함수, 이 함수는 유령 생성 함수의 .left css값에 필요하기 때문에 위의 .left 이전에 호출한다
// 유령의 위치를 정해진 범위 내(최소,최대)에서 랜덤하게 위치 시키기, 하드코딩 하는게 아닌 인자로 받아 간단하게 수정가능
function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

/////
