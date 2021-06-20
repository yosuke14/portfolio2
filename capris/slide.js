const images = ["images/team-img1.jpeg","images/team-img2.jpeg","images/team-img3.jpeg","images/team-img4.jpeg","images/team-img5.jpeg","images/team-img6.jpeg"];

let count = 0;
const slideimage =()=>{
  if( count >= images.length){
    count = 0;
  }else{
    document.getElementById('slideshow').src = images[count];
    count++;
  }
}

// 以下を追記してください！
let slideid = 0;
const startstop = () =>{
  if(slideid === 0){//開始ボタンを押した時の処理内容
    slideid = setInterval(slideimage, 1000);
  　}else{ //停止ボタンを押した時の処理内容
    　clearInterval(slideid);
    　slideid = 0;
  　}
}
document.getElementById('startstopbtn').onclick = startstop;

if(slideid === 0){//開始ボタンを押した時の処理内容
    slideid = setInterval(slideimage, 1000);
  }

  else{ //停止ボタンを押した時の処理内容
    clearInterval(slideid);
    slideid = 0;
  }