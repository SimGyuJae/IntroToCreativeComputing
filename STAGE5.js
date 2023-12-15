class Custom {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.isTransformed = false;
    this.touchOccurred = false;
  }

  show() {
    if (this.isTransformed || this.touchOccurred) {   
      stroke(255, 0, 0);
      strokeWeight(15);
      noFill();
      rect(this.x, this.y, this.w, this.h, 20);
    }
  }

  checkTouchInside(px, py) {
    if (px > this.x && px < this.x + this.w && py > this.y && py < this.y + this.h) {
      this.isTransformed = true;
      return true;
    } else {
      this.isTransformed = false;
      return false;
    }
  }
}

function STAGE5() {
  let b5; 
  let b5_1_1;
  let b5_1_2;
  let b5_2_1;
  let b5_2_2;
  let b5_2_3;
  let b5_3_1;
  let b5_3_2;
  let money = false;
  let pointsum = false;
  //let point = 
  this.setup = function() {
  b5 =     new Button(520,973,0,0,0);
  b5.curveRect = 100;
  b5.textDX = -20;
  b5.textDY = 5;
  b5.w = 130;             //폭
  b5.h = 45;
  b5.colorFill = 255;//글자 색
  b5_1_1 = new Custom(190,225,120,100);
  b5_1_2 = new Custom(340,225,120,100);
  b5_2_1 = new Custom(190,380,120,90);
  b5_2_2 = new Custom(340,380,120,90);
  b5_2_3 = new Custom(490,380,120,90);
  b5_3_1 = new Custom(230,565,180,125);
  b5_3_2 = new Custom(430,565,180,125);
  createCanvas(622, 1032);//시작화면 비율
  background(255);
  }

  this.draw = function() {
    image(ImgLoadSTAGE5, 0,0,622, 1032);
    if (money){
      fill(0);
      textFont("Courier New");
      textSize(30);
      text("최종 결제 금액: 12,000원", 150, 820);
    }
    if (pointsum){
      fill(0);
      textFont("Courier New");
      textSize(50);
      text("* * * * * * *", 148, 755);
    }
    if (ImgLoadSTAGE5) {
      b5_1_1.show();
      b5_1_2.show();
      b5_2_1.show();
      b5_2_2.show();
      b5_2_3.show();
      b5_3_1.show();
      b5_3_1.show();
      b5_3_2.show();
      b5.show();
      
      for (var i = 0; i < touches.length; i++){
          if(b5_1_1.checkTouchInside(touches[i].x, touches[i].y)){
            b5_1_1.touchOccurred = true;
            b5_1_2.touchOccurred = false;
            b5_1_2.isTransformed = false;
          }
          else if(b5_1_2.checkTouchInside(touches[i].x, touches[i].y)){
            b5_1_2.touchOccurred = true;
            b5_1_1.touchOccurred = false;
            b5_1_1.isTransformed = false;
          }
          
          if(b5_2_1.checkTouchInside(touches[i].x, touches[i].y)){
            b5_2_1.touchOccurred = true;
            b5_2_2.touchOccurred = false;
            b5_2_2.isTransformed = false;
            b5_2_3.touchOccurred = false;
            b5_2_3.isTransformed = false;
            pointsum = true;
          }
          else if(b5_2_2.checkTouchInside(touches[i].x, touches[i].y)){
            b5_2_2.touchOccurred = true;
            b5_2_1.touchOccurred = false;
            b5_2_1.isTransformed = false;
            b5_2_3.touchOccurred = false;
            b5_2_3.isTransformed = false;
            pointsum = true;
          }
          else if(b5_2_3.checkTouchInside(touches[i].x, touches[i].y)){
            b5_2_3.touchOccurred = true;
            b5_2_1.touchOccurred = false;
            b5_2_1.isTransformed = false;
            b5_2_2.touchOccurred = false;
            b5_2_2.isTransformed = false;
            pointsum = true;
          }
          
          if(b5_3_1.checkTouchInside(touches[i].x, touches[i].y)){
            b5_3_1.touchOccurred = true;
            b5_3_2.touchOccurred = false;
            b5_3_2.isTransformed = false;
            money = true;
            b5.textString = '결제';
          }
          else if(b5_3_2.checkTouchInside(touches[i].x, touches[i].y)){
            b5_3_2.touchOccurred = true;
            b5_3_1.touchOccurred = false;
            b5_3_1.isTransformed = false;
            money = true;
            b5.textString = '결제';
          }
        
          if(b5.contains(touches[i].x, touches[i].y) && (b5_3_2.touchOccurred || b5_3_1.touchOccurred) && (money = true)){
            if(b5_3_1.touchOccurred){
              setTimeout(function() {
                // 일정 시간 후에 실행할 코드
                mgr.showScene(STAGE7);
              }, 3000); // 3000 밀리초(3초) 후에 실행
            }
            else{
              setTimeout(function() {
                // 일정 시간 후에 실행할 코드
                mgr.showScene(STAGE8);
              }, 2000); // 2000 밀리초(2초) 후에 실행
            }
          }
        }
      }  
    }
  
}