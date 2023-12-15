function STAGE8() {//현금결제거부
  this.setup = function() {
  createCanvas(622, 1032);//시작화면 비율
  background(0);
  }

  this.draw = function() {
    fill(255,0,0);
    textFont("Courier New");
    textSize(20);
    text("현금결제는 카운터를 이용하시기 바랍니다.", 100, 300);
    text("5초후 메인화면으로 돌아갑니다.", 100, 400);
      
    setTimeout(function() {
      // 일정 시간 후에 실행할 코드
      isSecond = true;
      mgr.showScene(main);
    }, 5000); // 5000 밀리초(5초) 후에 실행
  }
}