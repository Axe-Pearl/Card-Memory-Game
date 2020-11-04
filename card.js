/*let cards = ["dumbledore.jpg","harry.jpg","hermione.jpg","ron.jpg","hagrid.png","snap.jpg"];
let count = 0,count1=0;
let id,score=0,preid;
let one,two;
let arr = ["","","","","",""];
let cardswon = ["","","","","",""];
function suffle(){
  for(var i=0;i<6;i++){
    let img_slt = Math.round(Math.random()*6+1)-1;
    arr[i] =img_slt;
    //let img_clk = document.getElementById(i).setAttribute("src",cards[img_slt]);
  }
}
  function turn(id){
    count++;
    if(count==1){document.getElementById(id).setAttribute("src",cards[arr[id]]);preid=id;}
    if(count==2){
      document.getElementById(id).setAttribute("src",cards[arr[id]]);
      console.log("id="+id);
      console.log("pre="+preid);
      if(cards[arr[id]]==cards[arr[preid]]&&id!=preid){
        score+=10;
        document.getElementById(id).setAttribute("src",cards[arr[id]]);
        document.getElementById("score").innerText=score;
        document.getElementById(preid).setAttribute("src","");
        document.getElementById(id).setAttribute("src","");
        }
      else{
        document.getElementById(preid).setAttribute("src","hogwarts.jpeg");
        document.getElementById(id).setAttribute("src","hogwarts.jpeg");
          }
          count=0;
  }
}*/
let cards = ["img/dumbledore.jpg","img/hagrid.png","img/harry.jpg","img/hermione.jpg","img/ron.jpg","img/snap.jpg","img/ginny.jpg","img/mcgonagall.jpg","img/peter.jpg","img/neville.jpg","img/voldemort.jpg"];
let suffled_cards = ["","","","","","","","","",""];
let sound = document.createElement("audio");
let score=0;
let non_repeat=[50,50,50,50,50,50,50,50,50,50];
let cardwon=[50,50,50,50,50,50,50,50,50,50]
let wonc=0;
let random_card,random_index;
let pcounter=0;
let preid=60;
let currentid=70;
let selected_card;
let timer=40;
let stack_counter=0;
let turned_card;
let s;
let t_counter=0;
let r=0;
let game_started=false;
let s1=document.createElement("audio");

let counter=0;
s1.setAttribute("src","sounds/lilys_theme.mp3");
setInterval(()=>{
  s1.play();
},1000);



function mute(){
  if(counter>1){counter=0;}
  if(counter==0){
    document.getElementById("sound").setAttribute("src","img/mute.png")
    s1.muted=true;
  }
  if(counter==1){
    document.getElementById("sound").setAttribute("src","img/unmute.png")
    s1.muted=false;
    }
 counter++;
}

function check_score(){
  if(score==50){
  clearInterval(s);
  sound.setAttribute("src","sounds/harry_potter_rock.mp3");
  sound.play();
  s1.muted=true;
    document.querySelector(".message_box").style.visibility="visible";
  }
}
function matched(){
  sound.setAttribute("src","sounds/correct.mp3");
  sound.play();
  score+=10;
  document.getElementById("score").innerHTML=score;
  cardwon[wonc]=preid;
  wonc++;
  cardwon[wonc]=currentid;
  wonc++;
  document.getElementById(preid).setAttribute("src","");
  document.getElementById(currentid).setAttribute("src","");
  pcounter=0;
  check_score();
  preid=60;currentid=80;
}
function gamestarted(){
    s=setInterval(()=>{
    timer=timer-1;
    document.getElementById("timing").innerHTML=timer+" secs";
    if(timer==0){
      clearInterval(s);
      sound.setAttribute("src","sounds/sad_violin.mp3");
      sound.play();
      s1.muted=true;
      document.getElementById("timing").innerHTML=timer+" secs";
      document.querySelector(".message_box").innerHTML="Game Over!You ran out of Time";
      document.querySelector(".message_box").style.visibility="visible";
    }
  },1000);
}
function notmatched(){
  sound.setAttribute("src","sounds/wrong.mp3");
  sound.play();
  document.getElementById(preid).setAttribute("src","img/hogwarts.jpeg");
  document.getElementById(currentid).setAttribute("src","img/hogwarts.jpeg");
  pcounter=0;
  preid=60;currentid=80;
}
function random_assign(){
  random_index=Math.floor(Math.random()*10);
  check_repeat(random_index);
}
function check_repeat(random_index){
  for(var i=0;i<11;i++){
    if(non_repeat[i]==random_index){
      random_assign();
      //stack_counter++;
    }

  }
}
function suffle(){
  game_started=true;
  gamestarted();
  while(r<11){
    random_card=Math.floor(Math.random()*cards.length);
    random_index=Math.floor(Math.random()*10);
    check_repeat(random_index);
    suffled_cards[random_index]=cards[random_card];
    non_repeat[r]=random_index;
    r=r+1;
    //alert("r= "+r);
    random_index=Math.floor(Math.random()*10);
    check_repeat(random_index);
    suffled_cards[random_index]=cards[random_card];
    non_repeat[r]=random_index;
    r=r+1;
    //alert("r= "+r);
  }
 }

function turn(selected_card){
  if(game_started==true&&timer!=0){
    pcounter++;
    if(pcounter==1){
      sound.setAttribute("src","sounds/flip.mp3");
      sound.play();
      document.getElementById(selected_card).setAttribute("src",suffled_cards[selected_card]);
      preid=selected_card;
    //alert("Preid= "+preid);
    }
    if(pcounter==2){
      //  alert("Preid= "+preid);
      sound.setAttribute("src","sounds/flip.mp3");
      sound.play();
      document.getElementById(selected_card).setAttribute("src",suffled_cards[selected_card]);
      currentid=selected_card;
    //  alert("currentid= "+currentid);
      if(suffled_cards[preid]==suffled_cards[currentid]&&preid!=currentid){
        setTimeout(matched,1000);
      }
      if(suffled_cards[preid]!=suffled_cards[currentid]&&preid!=currentid){
        setTimeout(notmatched,1000);
      }
      if(preid==currentid){
        pcounter=1;
      }

  }

}
  else{
    alert("Press Start Game button");
  }
}
