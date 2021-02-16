var counter = 0;
const points = 10;
var score = 0;
var multiplier= 1;
var multiplierprice = 100;
var multiplierbtn = document.getElementById("multiplier-btn");
var autoclicktimer = 30;
var autoclickprice = 1000;
var autoclickbtn = document.getElementById("autoclick-btn");
var bonus = 1;
var bonustimer = 30;
var bonusprice = 1000;
var bonusbtn = document.getElementById("bonus-btn");




document.getElementById("counter-lbl").innerHTML = counter;
document.getElementById("score-lbl").innerHTML = score + " points";
document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";
document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
document.getElementById("autoclick-btn-timer").innerHTML = autoclicktimer + " seconds";
document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
document.getElementById("bonus-btn-timer").innerHTML = bonustimer + " seconds";

ifMultiplier = () => {
   if (score >= multiplierprice){
      multiplierbtn.setAttribute("style", "border: solid red 2px;");
      multiplierbtn.disabled = false;
   }
   else{
      multiplierbtn.setAttribute("style", "border: none;");
      multiplierbtn.disabled = true;
   }
}

ifAutoclick = () => {
   if (score >= autoclickprice && !autoclickbtn.disabled){
      autoclickbtn.setAttribute("style", "border: solid red 2px;");
   }
   else{
      autoclickbtn.setAttribute("style", "border: none;");
   }
}

ifBonus = () => {
   if (score >= bonusprice && !bonusbtn.disabled){
      bonusbtn.setAttribute("style", "border: solid red 2px;");
   }
   else{
      bonusbtn.setAttribute("style", "border: none;");
   }
}

addClick = () => {
   counter = counter + 1;
   document.getElementById("counter-lbl").innerHTML = counter;
}

addScore = () => {
   score = score + (points * multiplier) * bonus;
   document.getElementById("score-lbl").innerHTML = score  + " points";   
   ifMultiplier();
   ifAutoclick();
   ifBonus();
}

buyButton = (buttonprice) => {
   score = score - buttonprice;
   document.getElementById("score-lbl").innerHTML = score  + " points";
   buttonprice = buttonprice * 2;
   ifMultiplier();
   ifAutoclick();
   ifBonus();
   return buttonprice;
}

toggleActive = (button) => {
   document.getElementById(button).disabled = !document.getElementById(button).disabled;         
}

cookiebtn.addEventListener("click", () => {   
   addClick();
   addScore();   
});


document.getElementById("multiplier-btn").addEventListener("click", () => {
   if( score >= multiplierprice)     
      multiplierprice = buyButton(multiplierprice);
      multiplier = multiplier + 1; 
      document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
      document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";          
   }
});

document.getElementById("autoclick-btn").addEventListener("click", () => { 
   if( score >= autoclickprice){
      toggleActive("autoclick-btn");
      autoclickprice = buyButton(autoclickprice);
      document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
      autoclicktimer= 30;
      const autoclickinterval = setInterval(count, 1000);
      function count(){
         if(autoclicktimer <= 0){
            toggleActive("autoclick-btn");
            clearInterval(autoclickinterval);
         }  
         document.getElementById("autoclick-btn-timer").innerHTML = autoclicktimer + " seconds";
         autoclicktimer = autoclicktimer-1; 
         addClick();                       
         addScore();                         
      }  
   }           
});


document.getElementById("bonus-btn").addEventListener("click", () => { 
   if( score >= bonusprice){
      toggleActive("bonus-btn");
      bonusprice = buyButton(bonusprice);
      document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
      bonus = 2;
      bonustimer= 30;
      const bonusinterval = setInterval(count, 1000);
      function count(){
         if(bonustimer <= 0){
            bonus = 1;
            toggleActive("bonus-btn");
            clearInterval(bonusinterval);
         }  
         document.getElementById("bonus-btn-timer").innerHTML = bonustimer + " seconds";
         bonustimer = bonustimer-1;                  
      }  
   }           
});
