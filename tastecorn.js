let cornArray = ["images/cornp1.png", "images/cornp2.png", "images/cornp3.png", "images/cornp4.png", "images/cornp5.png", "images/cornp6.png"];
let imgSeq = 0;
var crunch = new Audio("sounds/crunch.mp3");
var burp = new Audio("sounds/burp.mp3");
var img = document.getElementById('tooth')

// onClick event that runs through an image array, plays a sound, and a secondary image set
function eatCorn() {
    imgSeq=imgSeq+1;
    if (imgSeq == cornArray.length){
        img.src = 'images/opentooth.png';
        imgSeq = 0
        burp.play()
    }else{
        img.src = 'images/bite.gif';
        crunch.play()
    }
    document.getElementById("corntasting").src = cornArray[imgSeq]
    
}