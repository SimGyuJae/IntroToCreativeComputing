let myImage, x, y, w, h, numberCorrect, solved;
numberCorrect = 0;
solved = false;
let pieces = [];


class Piece
{
  /* 퍼즐조각 생성자 */
  constructor(myImage, x, y, w, h, tx, ty)
  {
    this.myImage = myImage;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.drag = false;
    this.tx = tx;
    this.ty = ty;
    this.correct = false;
  }
  
  /* 터치 인식 함수 */
  contains(ix, iy)
  {
    if (ix > this.x && ix < (this.x + this.w) && iy > this.y && iy < (this.y + this.h))
    {
      this.drag = true;
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;

      return true;
    }
  }
  
  /* 오브젝트 나타내기 함수 */
  show()
  {
    //그림자 - 드래그 중일 때만 보임
    if (this.drag)
    {
      fill(0, 100);
      rectMode(CORNER);
      noStroke();
      rect(this.x + 5, this.y + 5, this.w, this.h);
    }
    //퍼즐 조각 이미지
    image(this.myImage, this.x, this.y, this.w, this.h);
  }
  
  /* 현재 선택 오브젝트 인식 함수 */
  clicked(x, y)
  {
    this.drag = true;
    this.x = x - this.w / 2;
    this.y = y - this.h / 2;
  }
  
  /* 현재 오브젝트 활성화 함수 */
  active(x, y)
  {
    if (this.drag)
    {
      this.x = x - this.w / 2;
      this.y = y - this.h / 2;
    }
  }
  
  /* 퍼즐 조각 위치 확인 함수 */
  check()
  {
    this.drag = false;
    //if (abs(this.x - this.tx) < 100 && abs(this.y - this.ty) < 15)
    if(this.x > this.tx - 20 && this.x < this.tx + 100 && this.y > this.ty - 10 && this.y < this.ty + 40)
    {
      this.correct = true;
      this.x = this.tx;
      this.y = this.ty;
    }
    else
    {
      this.correct = false;
    }
  }
}

function STAGE3() {
  let b3;
  
  this.setup = function() {
    createCanvas(622, 1032);//시작화면 비율
    background(255);
    b3 = new Button(520,973,0,0,0);
    b3.textString = '다음';
    b3.curveRect = 100;
    b3.textDX = -20;
    b3.textDY = 5;
    b3.w = 130;             //폭
    b3.h = 45;
    b3.colorFill = 255;//글자 색
    /* 퍼즐 조각 셋업 */
    pieces[0] = new Piece(nameBlock, 20, 5, 110, 45, 45, 105);
    pieces[1] = new Piece(idfrontBlock, 230, 370, 130, 45, 45, 195);
    pieces[2] = new Piece(idbackBlock, 280, 5, 140, 45, 330, 195);
    pieces[3] = new Piece(phoneBlock, 20, 370, 200, 45, 45, 288);
    pieces[4] = new Piece(numcodeBlock, 430, 5, 130, 45, 445, 383);
    pieces[5] = new Piece(mailBlock, 230, 60, 300, 45, 48, 473);
    pieces[6] = new Piece(alphacodeBlock, 140, 5, 130, 45, 48, 578);
    pieces[7] = new Piece(alphacodeBlock, 160, 750, 130, 45, 48, 673);
    pieces[8] = new Piece(idcodeBlock, 300, 750, 290, 45, 48, 865);
    
  }

  this.draw = function() {
    image(ImgLoadSTAGE3, 0,0,622, 1032);
    if (ImgLoadSTAGE3) {
      b3.show();
      for (var i = 0; i < touches.length; i++){
        if(b3.contains(touches[i].x, touches[i].y) && solved == true){//버튼 터치 메소드
          setTimeout(function() {
            // 일정 시간 후에 실행할 코드
            mgr.showScene(STAGE4);
          }, 2000); // 2000 밀리초(2초) 후에 실행
        }
        if(pieces[0].contains(touches[i].x, touches[i].y))
        {
          pieces[0].clicked(mouseX, mouseY);
        }
        else {
            pieces[0].check();
        }
        if(pieces[1].contains(touches[i].x, touches[i].y))
        {
          pieces[1].clicked(mouseX, mouseY);
        }
        else {
            pieces[1].check();
        }
        if(pieces[2].contains(touches[i].x, touches[i].y))
        {
          pieces[2].clicked(mouseX, mouseY);
        }
        else {
            pieces[2].check();
        }
        if(pieces[3].contains(touches[i].x, touches[i].y))
        {
          pieces[3].clicked(mouseX, mouseY);
        }
        else {
            pieces[3].check();
        }
        if(pieces[4].contains(touches[i].x, touches[i].y))
        {
          pieces[4].clicked(mouseX, mouseY);
        }
        else {
            pieces[4].check();
        }
        if(pieces[5].contains(touches[i].x, touches[i].y))
        {
          pieces[5].clicked(mouseX, mouseY);
        }
        else {
            pieces[5].check();
        }
        if(pieces[6].contains(touches[i].x, touches[i].y))
        {
          pieces[6].clicked(mouseX, mouseY);
        }
        else {
            pieces[6].check();
        }
        if(pieces[7].contains(touches[i].x, touches[i].y))
        {
          pieces[7].clicked(mouseX, mouseY);
        }
        else {
            pieces[7].check();
        }
        if(pieces[8].contains(touches[i].x, touches[i].y))
        {
          pieces[8].clicked(mouseX, mouseY);
        }
        else {
            pieces[8].check();
        }   
      }//터치종료
      /* 퍼즐 draw */
      for (let i = 0; i < pieces.length; i++)
      {
        pieces[i].show();
      }

      numberCorrect = 0;
      for (let i = 0; i < pieces.length; i++)
      {
        pieces[i].check();
        if (pieces[i].correct == true)
        {
          numberCorrect++;
        }
      }
      if (numberCorrect == pieces.length)
      {
        solved = true;
      }
      else
      {
        solved = false;
      }
    }
  }
}