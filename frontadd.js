// PLUS ONE

// creating +1
let floating = document.getElementById("floating-cookies")

let plusone1 = document.createElement("p")
plusone1.innerHTML = `+ ${multiplier}`
plusone1.style.fontSize = "x-large"
plusone1.style.position= "absolute"
plusone1.style.top = "220px"
plusone1.style.left = "45%"
plusone1.style.opacity = "0"
floating.appendChild(plusone1)

let plusone2 = document.createElement("p")
plusone2.innerHTML = `+ ${multiplier}`
plusone2.style.fontSize = "x-large"
plusone2.style.position= "absolute"
plusone2.style.top = "210px"
plusone2.style.left = "50%"
plusone2.style.opacity = "0"
floating.appendChild(plusone2)

let plusone3 = document.createElement("p")
plusone3.innerHTML = `+ ${multiplier}`
plusone3.style.fontSize = "x-large"
plusone3.style.position= "absolute"
plusone3.style.top = "205px"
plusone3.style.left = "40%"
plusone3.style.opacity = "0"
floating.appendChild(plusone3)

document.getElementById("map").onclick = function(){
    let arrayPlusone = [plusone1, plusone2, plusone3]
    let randomPlusone = Math.floor(Math.random()*arrayPlusone.length)

    // animating +1
    arrayPlusone[randomPlusone].animate([
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
    })
    
}