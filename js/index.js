let i = 0;
let txt = 'Python Developer, web Developer'
let j = txt.length
let speed = 80;
let dem = document.getElementById("demo")


let a = document.getElementById("home")
let b = document.getElementById("about")
let c = document.getElementById("resume")
let d = document.getElementById("contact")



function autorun() {

    a.className = b.className = c.className = d.className = ""

    if (window.location.href.indexOf("index") != -1) {
        a.className += "active"
        console.log("hyy")
        rotate()
    }
    else if (window.location.href.indexOf("about") != -1) {
        b.className += "active"
        console.log("hsflkjd")
    }

    else if (window.location.href.indexOf("resume") != -1) {
        c.className += "active"

    }

    else if (window.location.href.indexOf("contact") != -1) {
        d.className += "active"

    }

    else {
        a.className += "active"
        console.log("notconfirm")
    }

}


function myFunction() {
    var x = document.getElementById("sidenav");
    if (x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }
}



function rotate() {

    if (i < txt.length) {

        dem.innerHTML += txt.charAt(i)
        i++

        setTimeout(rotate, speed)
    }

    else {
        dem.innerHTML = null
        i = 0
        rotate()

    }

}







function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("Sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

