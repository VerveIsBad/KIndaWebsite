const colors = ["red", "green", "blue", "orange", "purple"]

function changeToRandomColor() {
    var random = Math.floor(Math.random() * colors.length) 
    document.body.style.background = colors[random] 
    document.getElementById("bg-color").innerHTML = `Background color : ${colors[random]}`  
}
window.onload=() => {
    changeToRandomColor()
    var btn = document.getElementById("colorButton")
    btn.addEventListener("click", changeToRandomColor, true)
}
