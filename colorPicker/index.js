const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple"
]
const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
let randomColorString = '#';
let mode = "simple" // inital mode

function simpleChangeToRandomColor() {
    /* grab random color from the colors array 
    and sets it to the bg color 
    **/
    var random = Math.floor(Math.random() * colors.length)
    document.body.style.background = colors[random]
    document.getElementById("bg-color").innerHTML = `Background color : <span>${colors[random]}</span>`
    document.getElementById("colorButton").style.backgroundColor = colors[random]
}

function hexChangeToRandomColor() {
    /* generate a random hex color value
    for loop: grabs random char from the array of
    possible characters and adds it to the 
    randomColorSting
    **/
    for (let x = 0; x < 6; x++){

        let index = Math.floor(Math.random() * 16)
        let value = arrayOfColorFunctions[index]
    
        randomColorString += value
    }
    document.getElementById("bg-color").innerHTML = `Background color : <span>${randomColorString}</span>`
    document.body.style.background = randomColorString
    document.getElementById("colorButton").style.backgroundColor = randomColorString
    randomColorString = "#" // reset the string to base value

}

function getMode() {
    /* Gets the current mode and calls the correct func
    **/
    switch (mode) { // all possible modes
        case "simple":
            simpleChangeToRandomColor()
            break
        case "hex":
            hexChangeToRandomColor()
            break
        default:
            console.log(`An error has occured. ${mode}`)
            break
    }
}

window.onload = () => {
    getMode() 

    // ----- grab elements ----- //
    const Colorbtn = document.getElementById("colorButton")
    const simpleMode = document.getElementById("simple")
    const hexMode = document.getElementById("hex")
    // ----- grab elements ----- //


    // ----- add event listeners ----- //
    Colorbtn.addEventListener("click", getMode, true) // activates the color switch

    simpleMode.addEventListener('click', () => {
        mode = "simple"
        simpleMode.classList.add("active") // change active status
        hexMode.classList.remove("active")
    }, true)

    hexMode.addEventListener("click", () => {
        mode = "hex"
        hexMode.classList.add("active") // change active status
        simpleMode.classList.remove("active")
    }, true)
    // ----- add event listeners ----- //

} // end script 
