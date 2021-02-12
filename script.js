var counter = 0;
const points = 10;
var score = 0;
var multiplier= 1;
var multiplierprice = 100;
var autoclick;
var bonus;


document.getElementById("counter-lbl").innerHTML = counter;
document.getElementById("score-lbl").innerHTML = score;
document.getElementById("mult-btn-times").innerHTML = "x" + multiplier;
document.getElementById("mult-btn-points").innerHTML = multiplierprice + "points";



document.getElementById("cookie-btn").addEventListener("click", () => {
   counter = counter + 1;
   document.getElementById("counter-lbl").innerHTML = counter;
   score = score + (points * multiplier);
   document.getElementById("score-lbl").innerHTML = score;
});

document.getElementById("multiplier-btn").addEventListener("click", () => {
   if( score >= multiplierprice){
        score = score - multiplierprice;
        document.getElementById("score-lbl").innerHTML = score;
        multiplierprice = multiplierprice * 2;
        multiplier = multiplier + 1; 
        document.getElementById("mult-btn-times").innerHTML = "x" + multiplier;
        document.getElementById("mult-btn-points").innerHTML = multiplierprice + "points";      
   }
});


