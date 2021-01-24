var x = 0;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent)) {
    document.getElementById("mainCSS").setAttribute('href', "./css/mobile/main.css");
    document.getElementById("bannerCSS").setAttribute('href', "./css/mobile/banner.css");
    document.getElementById("aboutusCSS").setAttribute('href', "./css/mobile/aboutus.css");
     document.getElementById("introCSS").setAttribute('href', "./css/mobile/intro.css");
    document.getElementById("mc").setAttribute('href', "./css/mobile/mc.css");
     document.getElementById("backgroundCSS").setAttribute('href', "./css/mobile/background.css");
    
}
function nav(){
    if(x==0){
        document.getElementById("sideNav").style.left = "0px";
        x=1;
    }else if (x == 1){
        document.getElementById("sideNav").style.left = "-155px";
        x = 0;
    }
}

function changeFrame(frame) {
    console.log("inchange")
    var discord = document.getElementById("discord");
    var ts = document.getElementById("tsBox");
    var backButton = document.getElementById("back");
    var backDrop = document.getElementById("backdrop");
    if(frame == 1){
        discord.style.right = "10px";
        ts.style.right = "-28rem";
        backButton.style.display = "block";
        backDrop.style.transitionDelay = "0ms";
        backDrop.style.display = "block";
    } else if (frame == 2){
        ts.style.right = "10px";
        discord.style.right = "-28rem";
        backButton.style.display = "block";
        backDrop.style.transitionDelay = "0ms";
        backDrop.style.display = "block";
    } else if (frame == 'exit'){
        discord.style.right = "-28rem";
        ts.style.right = "-28rem";
        backButton.style.display = "none";
        backDrop.style.transitionDelay = "700ms";
        setTimeout(() => {backDrop.style.display = "none";}, 500)
    }
}
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}
function resize(){
    if(getWidth() > 1000){
        document.getElementById('sideLeftBorder').style.height = getHeight() + "px";   document.getElementById('sideRightBorder').style.height = getHeight() + "px";
    }else{
        document.getElementById('sideLeftBorder').style.height = 80 + "px";   document.getElementById('sideRightBorder').style.height = 80 + "px";
    }
}
resize();
window.addEventListener('resize', resize);


/*
    document.querySelector("#servericon").style.maxWidth = "64px";
    document.querySelector(".frame").style.display = "none";
    document.querySelector("#dummy2").style.display = "none";
    document.querySelector("#banner").style.fontSize = "34px";
    document.getElementsByClassName("ServerBanner").style.flexDirection = "column";
    document.getElementsByClassName("ServerStats").style.flexDirection = "column";
    document.getElementsByClassName("midTop").style.justifyContent = "center";
    document.getElementsByClassName("midTop").style.alignItems = "center";
    document.getElementsByClassName("midTop").style.flexDirection = "column";
    document.getElementsByClassName("playerList").style.height = "auto";
    document.querySelector(".frame").style.display = "none";
    document.getElementsByClassName("sideBorder").style.display = "none";*/