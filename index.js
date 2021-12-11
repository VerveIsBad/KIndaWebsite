const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple"
]
const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let randomColorString = '#';
let mode = "simple"

function simpleChangeToRandomColor() {
    var random = Math.floor(Math.random() * colors.length)
    document.body.style.background = colors[random]
    document.getElementById("bg-color").innerHTML = `Background color : <span>${colors[random]}</span>`
    document.getElementById("colorButton").style.backgroundColor = colors[random]
}

function hexChangeToRandomColor() {
    for (let x = 0; x < 6; x++){

        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColorFunctions[index]
    
        randomColorString += value
    }
    document.getElementById("bg-color").innerHTML = `Background color : <span>${randomColorString}</span>`
    document.body.style.background = randomColorString
    document.getElementById("colorButton").style.backgroundColor = randomColorString
    randomColorString = "#"

}

window.onload = () => {
    if (mode === "simple") {
        simpleChangeToRandomColor() 
    } else if (mode === "hex") {
        hexChangeToRandomColor() 
    } else {
        console.log(`An error has occured. ${mode}`)
    }
    
    var Colorbtn = document.getElementById("colorButton")
    
    Colorbtn.addEventListener("click", () => {
        if (mode === "simple") {
            simpleChangeToRandomColor() 
        } else if (mode === "hex") {
            hexChangeToRandomColor() 
        } else {
            console.log(`An error has occured. ${mode}`)
        }
    }, true)

    simpleMode = document.getElementById("simple")
    hexMode = document.getElementById("hex")

    simpleMode.addEventListener('click', () => {
        mode = "simple"
        if (simpleMode.classList.contains('active')) {
            hexMode.classList.remove("active")
        } else {
            simpleMode.classList.add("active")
            hexMode.classList.remove("active")
        }
    }, true)

    hexMode.addEventListener("click", () => {
        mode = "hex"
        if (hexMode.classList.contains("active")) {
            simpleMode.classList.remove("active")
        } else {
            hexMode.classList.add("active")
            simpleMode.classList.remove("active")
        }
    }, true)

}
