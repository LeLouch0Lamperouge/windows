function start_menubar() {
    document.getElementById("start-menu").style.transform = "translateX(0px)";
    document.getElementById("windowsclose").style.display = "block" ;
    document.getElementById("windowsopen").style.display = "none" ;
}

function close_menubar() {
    document.getElementById("start-menu").style.transform = "translateX(-1000px)";
    document.getElementById("windowsclose").style.display = "none" ;
    document.getElementById("windowsopen").style.display = "block" ;
}

function vsopen() {
    document.querySelector(".vs-icon").style.display = "block";
    document.querySelector(".vs-icon").style.background = "#516169";
    document.getElementById("vcode").style.display = "block";
    
}

function vsclose() {
    document.querySelector(".vs-icon").style.display = "none";
    document.getElementById("vcode").style.display = "none";
}

function vsminusclose() {
    document.querySelector(".vs-icon").style.display = "block";
    document.querySelector(".vs-icon").style.background = "none";
    document.getElementById("vcode").style.display = "none";
}

function vsminusopen() {
    document.querySelector(".vs-icon").style.display = "block";
    document.querySelector(".vs-icon").style.background = "#516169";
    document.getElementById("vcode").style.display = "block";  
}

$(document).ready(function(){
    $(".vs-icon").hover(function(){
      $(this).css("background-color", "#516169");
      }, function(){
      $(this).css("background-color", "transparent");
    });
  });