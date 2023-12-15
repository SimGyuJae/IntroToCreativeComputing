function STAGE6() {
  let b6;
  this.setup = function() {
  b6 = new Button(305,545,255,255,255);
  createCanvas(622, 1032);//시작화면 비율
  background(255);
  }

  this.draw = function() {
    image(ImgLoadSTAGE6, 0,0,622, 1032);
    b6.curveRect = 100;
    b6.textDX = -35;
    b6.textDY = 6;
    b6.w = 190;             //폭
    b6.h = 45;
    b6.colorFill = 0;//글자 색
    b6.textString = '처음으로';
    
    if (ImgLoadSTAGE6) {
      b6.show();
      for (var i = 0; i < touches.length; i++){
        if(b6.contains(touches[i].x, touches[i].y)){//버튼 터치 메소드
          //isSecond = true;
          mgr.showScene(main);
        }
      }  
    }
  }
}