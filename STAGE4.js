function STAGE4() {
  let b4;
  let rectlist = [];
  let sliderCol;
  let sliderRow;
  
  class TouchColorRect {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.col = 0;
    }

    display() {
      fill(this.col);
      rect(this.x, this.y, this.w, this.h, 5);
    }    
  }
  
  
  this.setup = function() {
  createCanvas(622, 1032);//시작화면 비율
  background(255);
  b4 = new Button(520,973,0,0,0);
  b4.textString = '다음';
  b4.curveRect = 100;
  b4.textDX = -20;
  b4.textDY = 5;
  b4.w = 130;             //폭
  b4.h = 45;
  b4.colorFill = 255;//글자 색
  
  let row1 = [
    new TouchColorRect(100, 320, 26, 26),
    new TouchColorRect(117, 288, 26, 26),
    new TouchColorRect(135, 257, 26, 26),
    new TouchColorRect(156, 226, 26, 26),
    new TouchColorRect(184, 202, 26, 26),
    new TouchColorRect(218, 186, 26, 26),
    new TouchColorRect(257, 178, 26, 26),
    new TouchColorRect(299, 172, 26, 26),
    new TouchColorRect(334, 172, 26, 26),
    new TouchColorRect(369, 179, 26, 26),
    new TouchColorRect(410, 186, 26, 26),
    new TouchColorRect(442, 202, 26, 26),
    new TouchColorRect(471, 226, 26, 26),
    new TouchColorRect(495, 257, 26, 26),
    new TouchColorRect(512, 288, 26, 26),
    new TouchColorRect(530, 320, 26, 26)
  ];
  let row2 = [
    new TouchColorRect(129, 322, 23, 23),
    new TouchColorRect(145, 297, 23, 23),
    new TouchColorRect(160, 269, 23, 23),
    new TouchColorRect(178, 244, 23, 23),
    new TouchColorRect(202, 225, 23, 23),
    new TouchColorRect(235, 212, 23, 23),
    new TouchColorRect(264, 205, 23, 23),
    new TouchColorRect(301, 202, 23, 23),
    new TouchColorRect(331, 202, 23, 23),
    new TouchColorRect(362, 205, 23, 23),
    new TouchColorRect(393, 210, 23, 23),
    new TouchColorRect(423, 225, 23, 23),
    new TouchColorRect(449, 244, 23, 23),
    new TouchColorRect(465, 271, 23, 23),
    new TouchColorRect(484, 297, 23, 23),
    new TouchColorRect(500, 322, 23, 23)
  ];
  let row3 = [
    new TouchColorRect(162, 320, 20, 20),
    new TouchColorRect(176, 300, 20, 20),
    new TouchColorRect(188, 280, 20, 20),
    new TouchColorRect(200, 260, 20, 20),
    new TouchColorRect(222, 245, 20, 20),
    new TouchColorRect(250, 234, 20, 20),
    new TouchColorRect(274, 229, 20, 20),
    new TouchColorRect(305, 225, 20, 20),
    new TouchColorRect(327, 225, 20, 20),
    new TouchColorRect(355, 229, 20, 20),
    new TouchColorRect(385, 233, 20, 20),
    new TouchColorRect(408, 245, 20, 20),
    new TouchColorRect(428, 260, 20, 20),
    new TouchColorRect(442, 280, 20, 20),
    new TouchColorRect(458, 300, 20, 20),
    new TouchColorRect(473, 320, 20, 20)
  ];
  rectlist.push(row1);
  rectlist.push(row2);
  rectlist.push(row3);
  sliderCol = createSlider(0,15);
  sliderRow = createSlider(0, 2);
  sliderCol.position(60, 650);
  sliderCol.size(200);
  sliderRow.position(60, 700);
  sliderRow.size(200);
  }

  this.draw = function() {
    image(ImgLoadSTAGE4, 0,0,622, 1032);
    
    if (ImgLoadSTAGE4 && !isSecond) {
      b4.show();
      let indexCol = sliderCol.value();
      let indexRow = sliderRow.value();
      rectlist[indexRow][indexCol].display();
      for (var i = 0; i < touches.length; i++){
        if(b4.contains(touches[i].x, touches[i].y)){//버튼 터치 메소드
          sliderCol.remove();
          sliderRow.remove();
          setTimeout(function() {
            // 일정 시간 후에 실행할 코드
            mgr.showScene(STAGE5);
          }, 2000); // 2000 밀리초(2초) 후에 실행
        }
      }
    }else{
      b4.textString = '이전';
      b4.show();
      fill(255,0,0);
      textFont("Courier New");
      textSize(30);
      text("잔여석: 없음", 60, 690);
      for (var i = 0; i < touches.length; i++){
        if(b4.contains(touches[i].x, touches[i].y)){//버튼 터치 메소드
          setTimeout(function() {
            // 일정 시간 후에 실행할 코드
            mgr.showScene(STAGE3);
          }, 2000); // 2000 밀리초(2초) 후에 실행
        }
      }
    }
  }
}