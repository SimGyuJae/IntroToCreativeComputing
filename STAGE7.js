function STAGE7() {//정상결제
  this.setup = function() {
  createCanvas(622, 1032);//시작화면 비율
  background(0);
  }

  this.draw = function() {
    image(ImgLoadNOTIFICATION, -50,200,700, 500);
    fill(0);
    textFont("Courier New");
    textSize(30);
    text("117 E 07", 320, 400);
    setTimeout(function() {
      // 일정 시간 후에 실행할 코드
      mgr.showScene(STAGE6);
    }, 5000); // 5000 밀리초(5초) 후에 실행
  }
}