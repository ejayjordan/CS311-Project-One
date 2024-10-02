let imgArray = ["images/cornp1.png", "images/cornp2.png", "images/cornp3.png", "images/cornp4.png", "images/cornp5.png", "images/cornp6.png"];
let imgSeq = 0;
var crunch = new Audio("sound/crunch.mp3");
var burp = new Audio("sound/burp.mp3");

function eatCorn() {
    imgSeq=imgSeq+1;
    if (imgSeq == imgArray.length){
        imgSeq = 0
        burp.play()
    }
    document.getElementById("corntasting").src = imgArray[imgSeq]
    crunch.play()
}