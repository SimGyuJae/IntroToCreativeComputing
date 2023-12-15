var mgr;
var ImgLoadbat;
var ImgLoadNOTIFICATION;
var ImgLoadSTAGE1;
var ImgLoadSTAGE2;
var ImgLoadSTAGE3;
var ImgLoadSTAGE4; 
var ImgLoadSTAGE5;
var ImgLoadSTAGE6;
var nameBlock;
var idfrontBlock;
var idbackBlock;
var phoneBlock;
var numcodeBlock;
var mailBlock;
var alphacodeBlock;
var idcodeBlock;
var isSecond = false;
function preload() {//사용할 모든 외부 이미지를 미리 로딩
  ImgLoadbat          = loadImage("assets/bat.png");
  ImgLoadSTAGE1       = loadImage("assets/stage1.png");
  ImgLoadSTAGE2       = loadImage("assets/stage2.png");
  ImgLoadSTAGE3       = loadImage("assets/stage3.png");
  ImgLoadSTAGE4       = loadImage("assets/stage4.png");
  ImgLoadSTAGE5       = loadImage("assets/stage5.png");
  ImgLoadSTAGE6       = loadImage("assets/stage6.png");
  ImgLoadNOTIFICATION = loadImage("assets/notification.png");
  nameBlock           = loadImage('assets/stage3Assets/name.png');
  idfrontBlock        = loadImage('assets/stage3Assets/idfront.png');
  idbackBlock         = loadImage('assets/stage3Assets/idback.png');
  phoneBlock          = loadImage('assets/stage3Assets/phone.png');
  numcodeBlock        = loadImage('assets/stage3Assets/numcode.png');
  mailBlock           = loadImage('assets/stage3Assets/mail.png');
  alphacodeBlock      = loadImage('assets/stage3Assets/alphacode.png');
  idcodeBlock         = loadImage('assets/stage3Assets/idcode.png');
}
function setup() {
  mgr = new SceneManager();
  createCanvas(622, 1032);//시작화면 비율
  background(255);
  mgr.wire();
  mgr.showScene(main);
  //mgr.showScene(STAGE2);
  //showScene함수 사용법: ~~~.js 파일을 불러오고자 한다면 ~~~를 인풋하면 됨
  //이때 index.html에 미리 <script src="~~~.js"></script> 형식으로 추가해야 함
}

function draw() {
  mgr.draw();
}

//-------------------------------
//Code for going fullscreen

function touchStarted () {
  //if (!fullscreen()) {
  //  fullscreen(true);
  //}
}

/* full screening will change the size of the canvas */
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//  print("new windowWidth:", windowWidth, "new //windowHeight:",windowHeight );
//}

/* prevents the mobile browser from processing some default
 * touch events, like swiping left for "back" or scrolling the page.
 */
document.ontouchmove = function(event) {
    event.preventDefault();
};
