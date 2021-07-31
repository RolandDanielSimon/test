window.addEventListener("load", function(){
    MyFunction();
});

function MyFunction() {
    mySound = new Audio('beat2.mp3');
    mySound.preload = "auto";
}

function togglePause() {
   if (mySound.paused) {
       mySound.play();
   } else {
       mySound.pause();
   }
}
function changed() {
    var newtime = document.getElementById("myRange").value/100;
    mySound.currentTime = "5.0";
    document.getElementById("a").innerHTML = mySound.currentTime.toString();
}

var playInterval = setInterval(playing, 10);

function playing() {
    if (!mySound.paused) {
        document.getElementById("myRange").value = Math.round(mySound.currentTime*100);
        document.getElementById("currenttime").innerHTML = Math.round(mySound.currentTime*100);
        if (document.getElementById("myRange").max !== Math.round(mySound.duration*100) && document.getElementById("duration").innerHTML !== Math.round(mySound.duration*100)) {
            document.getElementById("myRange").max = Math.round(mySound.duration*100);
            document.getElementById("duration").innerHTML = Math.round(mySound.duration*100);
        }
        if(document.getElementById("image").src !== "pause.png") {
            document.getElementById("image").src = "pause.png";
        }
    } else {
        if(document.getElementById("image").src !== "play.png") {
            document.getElementById("image").src = "play.png";
        }
    }
}
