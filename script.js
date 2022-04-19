const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");


function openHTML(){
    content1.style.transform = "translateX(0%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "orange";
    btn2.style.color = "black";
    btn3.style.color = "black";
    // to move content one after one
    // content1.style.transitionDelay = "0.4s";
    // content1.style.transitionDelay = "0s";
    // content1.style.transitionDelay = "0s";
}

function openCSS(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "black";
    btn2.style.color = "orange";
    btn3.style.color = "black";

    // content1.style.transitionDelay = "0s";
    // content1.style.transitionDelay = "0.4s";
    // content1.style.transitionDelay = "0s";
}

function openJavaScript(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0%)";
    btn1.style.color = "black";
    btn2.style.color = "black";
    btn3.style.color = "orange";
    // content1.style.transitionDelay = "0s";
    // content1.style.transitionDelay = "0s";
    // content1.style.transitionDelay = "0.4s";
}