// button
class Button {//이 안에 mgr을 넣는 것은 불가, this.nextStage = nextStage; 
  //이 버튼으로 갈 수 있는 스테이지 구현실패
  
  // 생성자
  constructor(x, y, color1,color2,color3) {// x, y폭, 높이는 모두 반응형 구현 필요
    this.x = x;
    this.y = y;
    this.w = 100;             //폭
    this.h = 50;              //높이
    this.color1 = color1;     //R
    this.color2 = color2;     //G
    this.color3 = color3;     //B
    this.click = false;       //클릭 되었는지
    this.textsize = 20;       //글자 크기
    this.textString = '';  //글자 내용
    this.curveRect = 10;
    this.colorFill = 0; //글자 색상
    this.textDX = 0;
    this.textDY = 0;
  }
  // 버튼 터치 메소드
  contains(ix, iy) {
    if (ix > this.x - (this.w / 2) && ix < this.x+ (this.w / 2) && iy > this.y - (this.h / 2) && iy < this.y+(this.h / 2) ){
      this.click = true;     //본인이 true값 저장
      return true;          //원래 호출된 곳에 true 반환
    }
  }
  
  // 버튼 구현 메소드
  show() {
    rectMode(CENTER);
    fill(this.color1, this.color2,this.color3);
    noStroke();
    rect(this.x, this.y, this.w, this.h, this.curveRect);
    
    fill(this.colorFill);
    textFont("Courier New");
    textSize(this.textsize);
    text(this.textString, this.x + this.textDX, this.y + this.textDY);
  }
}