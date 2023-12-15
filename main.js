function main() {
  
  this.setup = function() {
    createCanvas(622, 1032);//시작화면 비율
    background(255);
  }

  this.draw = function() {
    background(255);
    fill(0);
    ellipse(500, 500, 40, 40); //아래 타원 위치, 형태
    
    if (ImgLoadbat) {
      for (var i = 0; i < touches.length; i++) {
        push();
        translate(100, 100);
        rotate(touches[i].x * -0.001);
        image(ImgLoadbat, 0, 0, 110, 700); //야구배트
        pop();
        text(touches[i].x * -0.001, 10, 10, 22);
        if (touches[i].x * -0.001 <= -0.7) { //버튼 터치 메소드
          mgr.showScene(STAGE1);
        }
      }
    }
  }
}