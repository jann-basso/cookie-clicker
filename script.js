// INITIAL VARIABLES //
var counter = 0;
const points = 10;
var score = 0;
var cookiebtn = document.getElementById("map");
var multiplier = 1;
var multiplierprice = 250;
var multiplierbtn = document.getElementById("multiplier-btn");
multiplierbtn.disabled = true;
var autoclick = 0;
var autoclickprice = 500;
var autoclickInterval;
var autoclickbtn = document.getElementById("autoclick-btn");
autoclickbtn.disabled = true;
var bonus = 1;
var bonustimer = 30;
var bonusOn = false;
var bonusprice = 1000;
var bonusbtn = document.getElementById("bonus-btn");
bonusbtn.disabled = true;

// INSERT BACKGROUND MUSIC //
var music = document.createElement("audio");
music.setAttribute("src", "mp3/music.mp3");
music.setAttribute("preload", "auto");
music.setAttribute("controls", "none");
music.autoplay = true;
music.loop = true;
music.volume = 0.2;
music.setAttribute("style", "display: none;");
document.body.appendChild(music);

// CREATE SOUND FX //
var cookiesound = document.createElement("audio");
cookiesound.setAttribute("src", "mp3/crunch.mp3");
cookiesound.setAttribute("preload", "auto");
cookiesound.setAttribute("controls", "none");
cookiesound.setAttribute("style", "display: none;");
document.body.appendChild(cookiesound);
var buysound = document.createElement("audio");
buysound.setAttribute("src", "mp3/buy.mp3");
buysound.setAttribute("preload", "auto");
buysound.setAttribute("controls", "none");
buysound.setAttribute("style", "display: none;");
buysound.volume = 0.5;
document.body.appendChild(buysound);
var multipliersound = document.createElement("audio");
multipliersound.setAttribute("src", "mp3/multiplier.mp3");
multipliersound.setAttribute("preload", "auto");
multipliersound.setAttribute("controls", "none");
multipliersound.setAttribute("style", "display: none;");
multipliersound.volume = 0.5;
document.body.appendChild(multipliersound);
var autoclicksound = document.createElement("audio");
autoclicksound.setAttribute("src", "mp3/autoclick.mp3");
autoclicksound.setAttribute("preload", "auto");
autoclicksound.setAttribute("controls", "none");
autoclicksound.setAttribute("style", "display: none;");
autoclicksound.volume = 0.5;
document.body.appendChild(autoclicksound);
var bonussound = document.createElement("audio");
bonussound.setAttribute("src", "mp3/bonus.mp3");
bonussound.setAttribute("preload", "auto");
bonussound.setAttribute("controls", "none");
bonussound.setAttribute("style", "display: none;");
bonussound.volume = 0.3;
document.body.appendChild(bonussound);

// DISPLAY INITIAL VALUES //
document.getElementById("counter-lbl").innerHTML = counter;
document.getElementById("score-lbl").innerHTML = score + " points";
document.getElementById("mult-btn-times").innerHTML = "x " + multiplier;
document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";
document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
document.getElementById("autoclick-btn-times").innerHTML = autoclick + " click";
document.getElementById("bonus-btn-price").innerHTML = bonusprice + " points";
document.getElementById("bonus-btn-timer").innerHTML = bonustimer + " sec";


// FUNCTIONS //

// HIGHLIGHTS & ACTIVATES MULTIPLIER BUTTON WHEN AVAILABLE TO BUY //
ifMultiplier = () => {
   if (score >= multiplierprice) {
      multiplierbtn.setAttribute("style", "background-color: rgb(2, 34, 61)");
      document.getElementById("mult-btn-title").setAttribute("style", "color: white;");
      document.getElementById("mult-btn-price").setAttribute("style", "color: rgb(213, 137, 71);");
      multiplierbtn.disabled = false;
   }
   else {
      multiplierbtn.removeAttribute("style");
      document.getElementById("mult-btn-title").removeAttribute("style");
      document.getElementById("mult-btn-price").removeAttribute("style");
      multiplierbtn.disabled = true;
   }
}

// HIGHLIGHTS & ACTIVATES AUTOCLICK BUTTON WHEN AVAILABLE TO BUY //
ifAutoclick = () => {
   if (score >= autoclickprice) {
      autoclickbtn.setAttribute("style", "background-color: rgb(2, 34, 61)");
      document.getElementById("autoclick-btn-title").setAttribute("style", "color: white;");
      document.getElementById("autoclick-btn-price").setAttribute("style", "color: rgb(213, 137, 71);");
      autoclickbtn.disabled = false;
   }
   else {
      autoclickbtn.removeAttribute("style");
      document.getElementById("autoclick-btn-title").removeAttribute("style");
      document.getElementById("autoclick-btn-price").removeAttribute("style");
      autoclickbtn.disabled = true;
   }
}

// HIGHLIGHTS & ACTIVATES BONUS BUTTON WHEN AVAILABLE TO BUY //
ifBonus = () => {
   if (score >= bonusprice && !bonusOn) {
      bonusbtn.setAttribute("style", "background-color: rgb(2, 34, 61)");
      document.getElementById("bonus-btn-title").setAttribute("style", "color: white;");
      document.getElementById("bonus-btn-price").setAttribute("style", "color: rgb(213, 137, 71);");
      bonusbtn.disabled = false;
   }
   else {     
      bonusbtn.removeAttribute("style");
      document.getElementById("bonus-btn-title").removeAttribute("style");
      document.getElementById("bonus-btn-price").removeAttribute("style");
      bonusbtn.disabled = true;
   }
}

// CREATES ON CLICK +X TEXT //
let floating = document.getElementById("floating-cookies");

let plusone1 = document.createElement("p");
plusone1.innerHTML = "+" + multiplier;
plusone1.style.fontSize = "x-large";
plusone1.style.position= "absolute";
plusone1.style.top = "220px";
plusone1.style.left = "45%";
plusone1.style.opacity = "0";
floating.appendChild(plusone1);

let plusone2 = document.createElement("p");
plusone2.innerHTML = "+" + multiplier;
plusone2.style.fontSize = "x-large";
plusone2.style.position= "absolute";
plusone2.style.top = "210px";
plusone2.style.left = "50%";
plusone2.style.opacity = "0";
floating.appendChild(plusone2);

let plusone3 = document.createElement("p");
plusone3.innerHTML = "+" + multiplier;
plusone3.style.fontSize = "x-large";
plusone3.style.position= "absolute";
plusone3.style.top = "205px";
plusone3.style.left = "40%";
plusone3.style.opacity = "0";
floating.appendChild(plusone3);

// ADDS CLICK TO COUNT + UPDATES COUNTER DISPLAY //
addClick = () => {
   counter = counter + (1*multiplier);
   document.getElementById("counter-lbl").innerHTML = counter;
   cookiesound.currentTime = 0;
   cookiesound.play();
   let arrayPlusone = [plusone1, plusone2, plusone3]
   let randomPlusone = Math.floor(Math.random()*arrayPlusone.length)
   arrayPlusone[randomPlusone].animate([ // ANIMATE +X // 
      {
         transform: "translateY(0px)",
         opacity: 1
      },
      {
         transform: "translateY(-150px)",
         opacity: 0.1
      }
      ], {
         duration: 2000,
      }
   )  
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
   buysound.currentTime = 0;
   buysound.play();
   score = score - buttonprice;
   document.getElementById("score-lbl").innerHTML = score  + " points";
   switch (buttonprice) {
      case multiplierprice :
         buttonprice = buttonprice * 2;
         multipliersound.currentTime = 0;
         multipliersound.play();
         break;
      case autoclickprice :
         buttonprice = buttonprice + 500;
         autoclicksound.currentTime = 0;
         autoclicksound.play();
         break;
      case bonusprice :
         buttonprice = buttonprice + 1000;
         bonussound.currentTime = 0;
         bonussound.play();
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
      plusone1.innerHTML = "+" + multiplier;
      plusone2.innerHTML = "+" + multiplier;
      plusone3.innerHTML = "+" + multiplier;
      document.getElementById("mult-btn-price").innerHTML = multiplierprice + " points";
   }
});

// HANDLES AUTOCLICK BUTTON (10 CLICKS/SECOND FOR 10 SECONDS) & COUNTDOWN INTERVAL //
autoclickbtn.addEventListener("click", () => { 
   if (score >= autoclickprice) {
      autoclick = autoclick + 1;
      document.getElementById("autoclick-btn-times").innerHTML = autoclick + " clicks";
      autoclickprice = buyButton(autoclickprice);
      document.getElementById("autoclick-btn-price").innerHTML = autoclickprice + " points";
      clearInterval(autoclickInterval);
      autoclickInterval = setInterval(autoclickOn, (1000/autoclick));
      function autoclickOn() {
         addClick();
         addScore();
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
      function count() {    // COUNTS 30 SECONDS //
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

document.getElementById("map").onmouseover = function() {
    let cookie = document.getElementById("cookie-img")
    cookie.setAttribute("src", "img/cookie-cracked.webp")
}

document.getElementById("map").onmouseout = function() {
   let cookie = document.getElementById("cookie-img")
   cookie.setAttribute("src", "img/cookie-complete.webp")
}
