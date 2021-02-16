
document.getElementById("map").onmouseover = function() {
    let cookie = document.getElementById("cookie-img")
    cookie.setAttribute("src", "img/cookie-cracked.png")
}

document.getElementById("map").onmouseout = function() {
    let cookie = document.getElementById("cookie-img")
    cookie.setAttribute("src", "img/cookie-complete.png")
}
