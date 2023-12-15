function STAGE1() {
  let b1;
  this.setup = function() {
  createCanvas(622, 1032);//시작화면 비율
  background(255);
  b1 = new Button(309, 910, 0, 0, 0);
  }

  this.draw = function() {
    image(ImgLoadSTAGE1, 0,0,622, 1032);
    b1.textString = 'GO TICKET!';
    b1.textsize = 50;
    b1.curveRect = 100;
    b1.colorFill = 255;
    b1.w = 340; 
    b1.h = 126;
    b1.textDX = -140;
    b1.textDY = 15;
    if (ImgLoadSTAGE1) {
      b1.show();
      for (var i = 0; i < touches.length; i++){
        if(b1.contains(touches[i].x, touches[i].y)){//버튼 터치 메소드
          setTimeout(function() {
            // 일정 시간 후에 실행할 코드
            mgr.showScene(STAGE2);
          }, 2000); // 2000 밀리초(3초) 후에 실행
        }
      }
    }
  }
}