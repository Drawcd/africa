// can1 varibles
var can1 = document.getElementById('lion');
var can2 = document.getElementById('lionbtn');
var can1Audio = document.getElementById('lion-Audio');

/**********
Can1
**********/

// can-1 bounce
var can1tl = new TimelineMax({
  paused: true
});

can1tl.to(can1, 0.2, {scaleX: 1.06, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(can1, 0.2, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(can1, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut});

// can1 audio
function playCan1Audio() {
  can1Audio.currentTime = 0;
  can1Audio.play();
}

// can1 actions
function can1hit(){
  can1tl.restart();
  can1tl.play();
  playCan1Audio();
}

// can1 actions when clicked
can1.addEventListener("click", can1hit);
can2.addEventListener("click", can1hit);

// can1.addEventListener("click", can1hit);
