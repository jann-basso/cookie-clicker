// INITIAL VARIABLES //

var counter = 0;
const points = 10;
var score = 0;
var cookiebtn = document.getElementById("cookie-btn");
var multiplier = 1;
var multiplierprice = 300;
var multiplierbtn = document.getElementById("multiplier-btn");
multiplierbtn.disabled = true;
var autoclicktimer = 10;
var autoclickOn = false;
var autoclickprice = 1000;
var autoclickbtn = document.getElementById("autoclick-btn");
autoclickbtn.disabled = true;
var bonus = 1;
var bonustimer = 30;
var bonusOn = false;
var bonusprice = 10000;
var bonusbtn = document.getElementById("bonus-btn");
bonusbtn.disabled = true;

// DISPLAY INITIAL VALUES //

document.getElementById("counter-lbl").innerHTML = counter;
document.getElementById("score-lbl").innerHTML = score + " points";
document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";
document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
document.getElementById("autoclick-btn-timer").innerHTML = autoclicktimer + " seconds";
document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
document.getElementById("bonus-btn-timer").innerHTML = bonustimer + " seconds";


// FUNCTIONS //

// HIGHLIGHTS & ACTIVATES MULTIPLIER BUTTON WHEN AVAILABLE TO BUY //
ifMultiplier = () => {
   if (score >= multiplierprice) {
      multiplierbtn.setAttribute("style", "border: solid red 2px;");
      multiplierbtn.disabled = false;
   }
   else {
      multiplierbtn.setAttribute("style", "border: none;");
      multiplierbtn.disabled = true;
   }
}

// HIGHLIGHTS & ACTIVATES AUTOCLICK BUTTON WHEN AVAILABLE TO BUY //
ifAutoclick = () => {
   if (score >= autoclickprice && !autoclickOn) {
      autoclickbtn.setAttribute("style", "border: solid red 2px;");
      autoclickbtn.disabled = false;
   }
   else {
      autoclickbtn.setAttribute("style", "border: none;");
      autoclickbtn.disabled = true;
   }
}

// HIGHLIGHTS & ACTIVATES BONUS BUTTON WHEN AVAILABLE TO BUY //
ifBonus = () => {
   if (score >= bonusprice && !bonusOn){
      bonusbtn.setAttribute("style", "border: solid red 2px;");
      bonusbtn.disabled = false;
   }
   else{
      bonusbtn.setAttribute("style", "border: none;");
      bonusbtn.disabled = true;
   }
}

// ADDS CLICK TO COUNT + UPDATES COUNTER DISPLAY //
addClick = () => {
   counter = counter + 1;
   document.getElementById("counter-lbl").innerHTML = counter;
}

// ADDS POINTS TO SCORE + UPDATES SCORE DISPLAY + VERIFIES PURCHASES OPTIONS//
addScore = () => {
   score = score + (points * multiplier) * bonus;
   document.getElementById("score-lbl").innerHTML = score  + " points";   
   ifMultiplier();
   ifAutoclick();
   ifBonus();
}

// UPDATES SCORE & BUTTON PRICES + VERIFIES PURCHASES OPTIONS //
buyButton = (buttonprice) => {
   score = score - buttonprice;
   document.getElementById("score-lbl").innerHTML = score  + " points";
   switch (buttonprice) {
      case multiplierprice :
         buttonprice = buttonprice * 2;
         break;
      case autoclickprice :
         buttonprice = buttonprice + 2000;
         break;
      case bonusprice :
         buttonprice = buttonprice + 10000;
         break;
   }
   ifMultiplier();
   ifAutoclick();
   ifBonus();
   return buttonprice;
}

// CLICK LISTENERS //

// HANDLES COOKIE CLICKS //
cookiebtn.addEventListener("click", () => {   
   addClick();
   addScore();   
});

// HANDLES MULTIPLIER BUTTONS CLICKS //
multiplierbtn.addEventListener("click", () => {
   if (score >= multiplierprice) {    
      multiplierprice = buyButton(multiplierprice);
      multiplier = multiplier + 1; 
      document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
      document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";          
   }
});

// HANDLES AUTOCLICK BUTTON (10 CLICKS/SECOND FOR 10 SECONDS) & COUNTDOWN INTERVAL //
autoclickbtn.addEventListener("click", () => { 
   if (score >= autoclickprice) {
      autoclickOn = true;
      autoclickprice = buyButton(autoclickprice);
      document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
      autoclicktimer= 10;
      const autoclickinterval = setInterval(count, 1000);
      function count() {   // COUNTS 10 SECONDS //
         if (autoclicktimer <= 0) {            
            autoclickOn = false;
            clearInterval(autoclickinterval);
         }
         var turbotimer = 1;  
         const turboclickinterval = setInterval(turbo, 100);
         function turbo() {   // COUNTS 10 CLICKS //
            if (turbotimer >= 10) {
               clearInterval(turboclickinterval);               
            }
            addClick();                       
            addScore(); 
            turbotimer = turbotimer + 1; 
         }
         document.getElementById("autoclick-btn-timer").innerHTML = autoclicktimer + " seconds";
         autoclicktimer = autoclicktimer-1;                 
      }  
   }           
});

// HANDLES BONUS BUTTON & COUNTDOWN INTERVAL //
bonusbtn.addEventListener("click", () => { 
   if (score >= bonusprice) {
      bonusOn = true;
      bonusprice = buyButton(bonusprice);
      document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
      bonus = 2;
      bonustimer= 30;
      const bonusinterval = setInterval(count, 1000);
      function count(){    // COUNTS 30 SECONDS //
         if (bonustimer <= 0) {
            bonus = 1;
            bonusOn = false;
            clearInterval(bonusinterval);
         }  
         document.getElementById("bonus-btn-timer").innerHTML = bonustimer + " seconds";
         bonustimer = bonustimer-1;                  
      }  
   }           
});