var counter = 0;
const points = 10;
var score = 0;
var multiplier= 1;
var multiplierprice = 100;
var autoclicktimer = 30;
var autoclickprice = 1000;
var bonus = 1;
var bonustimer = 30;
var bonusprice = 5000;




document.getElementById("counter-lbl").innerHTML = counter;
document.getElementById("score-lbl").innerHTML = score + " points";
document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";
document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
document.getElementById("autoclick-btn-timer").innerHTML = "0:" + autoclicktimer;
document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
document.getElementById("bonus-btn-timer").innerHTML = "0:" + bonustimer;


document.getElementById("cookie-btn").addEventListener("click", () => {
   counter = counter + 1;
   document.getElementById("counter-lbl").innerHTML = counter;
   score = score + (points * multiplier) * bonus;
   document.getElementById("score-lbl").innerHTML = score;
});

document.getElementById("multiplier-btn").addEventListener("click", () => {
   if( score >= multiplierprice){
        score = score - multiplierprice;
        document.getElementById("score-lbl").innerHTML = score;
        multiplierprice = multiplierprice * 2;
        multiplier = multiplier + 1; 
        document.getElementById("mult-btn-times").innerHTML = "x" + multiplier;
        document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";      
   }
});

document.getElementById("autoclick-btn").addEventListener("click", () => { 
   if( score >= autoclickprice){
      score = score - autoclickprice;
      document.getElementById("score-lbl").innerHTML = score;
      autoclickprice = autoclickprice * 2;
      document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
      autoclicktimer= 30;
      const autoclickinterval = setInterval(count, 1000);
      function count(){
         if(autoclicktimer <= 0){
            clearInterval(autoclickinterval);
         }  
         document.getElementById("autoclick-btn-timer").innerHTML = "0:" + autoclicktimer;
         autoclicktimer = autoclicktimer-1; 
         counter = counter + 1;        
         document.getElementById("counter-lbl").innerHTML = counter;
         score = score + (points * multiplier) * bonus;  
         document.getElementById("score-lbl").innerHTML = score;                
      }  
   }
           
});
document.getElementById("bonus-btn").addEventListener("click", () => { 
   if( score >= bonusprice){
      score = score - bonusprice;
      document.getElementById("score-lbl").innerHTML = score;
      bonusprice = bonusprice * 2;
      document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
      bonus = 2;
      bonustimer= 30;
      const bonusinterval = setInterval(count, 1000);
      function count(){
         if(bonustimer <= 0){
            bonus = 1;
            clearInterval(bonusinterval);
         }  
         document.getElementById("bonus-btn-timer").innerHTML = "0:" + bonustimer;
         bonustimer = bonustimer-1;                  
      }  
   }
           
});
