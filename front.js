var s=document.createElement("audio");
var s1=document.createElement("audio");

let counter=0;
s.setAttribute("src","sounds/harry_potter_hedwigs.mp3");
s1.setAttribute("src","sounds/strikel.mp3");
setInterval(()=>{
  s.play();
  s1.play();
},10);


function mute(){
  if(counter>1){counter=0;}
  if(counter==0){
    document.getElementById("sound").setAttribute("src","img/mute.png")
    s.muted=true;
    s1.muted=true;
  }
  if(counter==1){
    document.getElementById("sound").setAttribute("src","img/unmute.png")
    s.muted=false;
    s1.muted=false;
  }
 counter++;
}
