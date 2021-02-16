/* OPTION 1 - ORIGIN FROM DIFFERENT PLACES */

/*
document.getElementById("map").onclick = function(){
    // creating img +1 and positioning it
    let floating = document.getElementById("floating-cookies")

    let plusone = document.createElement("img")
    plusone.setAttribute("src", "img/plusone.png")
    plusone.style.position= "absolute"
    plusone.style.top = "220px"
    plusone.style.left = "45%"
    floating.appendChild(plusone)
   
    // animating img
    plusone.animate([
        {
            transform: "translateY(0px)",
            opacity: 1 
        },
        {
            transform: "translateY(-150px)",
            opacity: 0.1
        }
    ], {
        duration: 4000,
        delay: 500
        
    })
}
*/


/* OPTION 2 - ORIGIN FROM DIFFERENT PLACES */

// creating img +1 and positioning it
let floating = document.getElementById("floating-cookies")

let plusone1 = document.createElement("img")
plusone1.setAttribute("src", "img/plusone.png")
plusone1.style.position= "absolute"
plusone1.style.top = "220px"
plusone1.style.left = "45%"
plusone1.style.opacity = "0"
floating.appendChild(plusone1)

let plusone2 = document.createElement("img")
plusone2.setAttribute("src", "img/plusone.png")
plusone2.style.position= "absolute"
plusone2.style.top = "210px"
plusone2.style.left = "50%"
plusone2.style.opacity = "0"
floating.appendChild(plusone2)

let plusone3 = document.createElement("img")
plusone3.setAttribute("src", "img/plusone.png")
plusone3.style.position= "absolute"
plusone3.style.top = "205px"
plusone3.style.left = "40%"
plusone3.style.opacity = "0"
floating.appendChild(plusone3)


document.getElementById("map").onclick = function(){
    let arrayPlusone = [plusone1, plusone2, plusone3]
    let randomPlusone = Math.floor(Math.random()*arrayPlusone.length)

    // animating img
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