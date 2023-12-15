function STAGE2() {
  let b2, select1, select2, select3, select4, select5, checkbox, selected;
  
  
  this.setup = function() {
    createCanvas(622, 1032);//시작화면 비율
    background(255);
    b2 = new Button(520,973,0,0,0);
    b2.textString = '다음';
    b2.curveRect = 100;
    b2.textDX = -20;
    b2.textDY = 5;
    b2.w = 130;             //폭
    b2.h = 45;
    b2.colorFill = 255;//글자 색
    
    select1 = new Button(165, 250, 150, 150, 150);
    select1.w = 220;
    select1.h = 100;
    select1.textsize = 25;
    
    select2 = new Button(165, 400, 150, 150, 150);
    select2.w = 220;
    select2.h = 100;
    select2.textsize = 25;
    
    select3 = new Button(165, 550, 150, 150, 150);
    select3.w = 220;
    select3.h = 100;
    select3.textsize = 25;
    
    select4 = new Button(165, 700, 150, 150, 150);
    select4.w = 220;
    select4.h = 100;
    select4.textsize = 25;
    
    select5 = new Button(165, 850, 150, 150, 150);
    select5.w = 220;
    select5.h = 100;
    select5.textsize = 25;
    
    checkbox = createCheckbox('동의함');
    checkbox.position(510, 880);
    
    selected = false;
  }
  this.draw = function() {
    image(ImgLoadSTAGE2, 0,0,622, 1032);
    if (ImgLoadSTAGE2) {
      b2.show();
      for (var i = 0; i < touches.length; i++){
        if(b2.contains(touches[i].x, touches[i].y) && selected && checkbox.checked()){//버튼 터치 메소드
          setTimeout(function() {
            // 일정 시간 후에 실행할 코드
            checkbox.remove();
            mgr.showScene(STAGE3);
          }, 2000); // 2000 밀리초(2초) 후에 실행
        }
      } 
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(0);
      stroke(1);
      text('진행하실 메뉴를\n선택해주세요', 165, 120);

      select1.textString = '예매 티켓\n수령하기';
      select1.show();
    
      select2.textString = '티켓\n현장 발권';
      select2.show();

      for (var j = 0; j < touches.length; j++)
      {
        if(select2.contains(touches[j].x, touches[j].y))
        {
          if(selected == false)
          {
            select2.color1 = 90;
            select2.color2 = 90;
            select2.color3 = 90;
            select2.colorFill = 255;
          }
          else
          {
            select2.color1 = 150;
            select2.color2 = 150;
            select2.color3 = 150;
            select2.colorFill = 0;
          }
          selected = !selected;
        }
      }

      select3.textString = '선물권 구입';
      select3.show();

      select4.textString = '도움말';
      select4.show();

      select5.textString = '언어설정';
      select5.show();

      textSize(15);
      noStroke();
      textAlign(LEFT, CENTER);
      text('<개인정보 수집 및 활용 동의>\n1. 수집하는 개인정보 항목\n티켓 예매 서비스 이용시 아래와 같은 개인정보를 수집하여 이용할 수 있습니다.\n- 이름, 주민등록번호, 휴대폰번호, 이메일, 결제정보(카드번호, 유효기간, 생년월일, 카드 비밀번호 앞 2자리) 또한, 예매 과정에서 수집된 아래 정보를 활용할 수 있습니다.\n- Ip 주소, 쿠키, 방문 일시, 서비스 이용 기록, 모바일 서비스 이용시 단말기 정보, 결제 및 구매 기록, 이동통신사 정보\n2. 개인정보 수집 방법\n- 예매 홈페이지, 모바일기기, 팩스, 전화, 이메일\n- 협력 회사로부터의 제공\n- 생성정보 수집 툴을 통한 수집\n3. 수집한 개인정보의 이용목적\n수집한 개인정보를 다음의 목적을 위해 활용합니다.\n- 서비스 이행: 서비스 제공에 관한 게약 이행 및 서비스 제공에 따른 요금 정산, 콘텐츠 제공, 구매 및 요금 결제, 입장 시 사용자 인증 및 예매내역 확인\n- 마케팅 및 광고에 활용: 신규 서비스 개발 및 특화, 이벤트 등 영리 목적의 광고성 정보전송(전화, 이메일, 문자 등), 인구통계학적 특성에 따른 서비스 제공 및 광고 게재\n4. 개인정보의 보유 및 이용 기간\n원칙적으로, 이용자의 개인정보를 예매 서비스 탈퇴 시까지 보관합니다. 단, 개인정보 도용 등으로 인한 원치 않는 서비스 탈퇴, 부정 이용 방지 등에 대비하기 위하여 탈퇴 요청 이후 3일 간 개인정보를 보유합니다.\n- 보존 근거: 전자상거래등에서의 소비자보호에 관한 법률\n- 보존 기간: 5년', 460, 460, 260, 900);

    }
  }
}