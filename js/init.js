//화면 자체에 이벤트(keydown) 감지하는 것을 추가
//keydown이벤트를 발생 할때마다 함수를 실행 후 브라우저에서 이벤트 정보(변수 e)를 넘겨준다
document.addEventListener("keydown", function (e) {
  //heroElement.style.left의 현재값을 갖고오려면
  // css 값을 갖고와야한다 DOM으로 css갖고오는 방법을 알아야한다
  // (계산된) CSS 속성과 값을 얻는 getComputedStyle()
  const heroLeft = getComputedStyle(heroElement).left; //left 현재값
  // split으로 'px' 기준으로 나누고 배열을 만들어 배열의 0번째인 '400' 가져오기
  // 문자열인 '400'을 숫자로 -> Number()
  const widthoutPx = Number(heroLeft.split("px")[0]);

  // 주의! 잘 살펴보기!
  //조건문 용사의 left가 0보다 작아지거나 or 765보다 커질때

  //두가지의 조건문이 모두 실행 되야 한다(왼쪽에 0으로 붙었을때 오른쪽으로 이동도 되게 하는 조건)
  // if (widthoutPx <= 0 && e.keyCode === 37) {
  //   //widthoutPx인 left의 현재값이 0보다 작거나 같아야 하고(&&)
  //   // e.keyCode === 39로 하는거 아님 이 조건은 왼쪽키를 눌렀을때만의 조건이다
  //   return;
  // }
  // bg의 width - hero의 width의 765값보다 현재 widthoutPx값이 커지면 멈춰야되고
  // 오른쪽으로 이동할때 현재 값이 765보다 작아야하는데 (>=) 이렇게 하면 용사가 bg를 조금 넘어가서 멈춤
  // 그래서 미리 예측해서 + 10 쯤하여 현재값에서 더 오른쪽으로 가게 함
  // if (widthoutPx + 10 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39) {
  //   console.log(widthoutPx);
  //   return;
  // }
  // 위의 코드를 합친게 아래 코드이다

  if (
    (widthoutPx <= 0 && e.keyCode === 37) ||
    (widthoutPx + 10 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39)
  ) {
    return;
  }

  // 왼쪽키 = 37,오른쪽키= 39
  if (e.keyCode === 37) {
    heroElement.style.left = widthoutPx - 10 + "px";
    heroElement.className = "left"; //heroElement (=#hero) 이기때문에 className에 "left"클래스를 붙여 css의 position값을 할당한다
  } else if (e.keyCode === 39) {
    heroElement.style.left = widthoutPx + 10 + "px";
    heroElement.className = "right";
  }
});

// 키보드에서 손을 뗏을 때 일어나는 이벤트
document.addEventListener("keyup", function (e) {
  heroElement.className = "stop";
});
