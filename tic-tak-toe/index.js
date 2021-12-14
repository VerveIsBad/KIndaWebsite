let state = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]


window.onload = () => { 

    let turn = "o"

    // cells 
    const cell_1 = document.getElementById("cell_1")
    const cell_2 = document.getElementById("cell_2")
    const cell_3 = document.getElementById("cell_3")
    const cell_4 = document.getElementById("cell_4")
    const cell_5 = document.getElementById("cell_5")
    const cell_6 = document.getElementById("cell_6")
    const cell_7 = document.getElementById("cell_7")
    const cell_8 = document.getElementById("cell_8")
    const cell_9 = document.getElementById("cell_9")
    // cells 

    var turnCounter = document.getElementById("turnCounter")
    turnCounter.innerHTML = turn

    cell_1.addEventListener("click", ()  => {
        
        if (cell_1.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_1.innerHTML = "x"
                state[0][0] = 1
                turn = "o"
            } else {
                cell_1.innerHTML = "o"
                turn = "x"
                state[0][0] = 0
            }
        } else {
            alert("You cant do that! Please wait Your turn.")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_2.addEventListener("click", () => {

        if(cell_2.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_2.innerHTML = "x"
                state[0][1] = 1
                turn = "o"
            } else {
                cell_2.innerHTML = "o"
                turn = "x"
                state[0][1] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)


    cell_3.addEventListener("click", () => {

        if(cell_3.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_3.innerHTML = "x"
                turn = "o"
                state[0][2] = 1
            } else {
                cell_3.innerHTML = "o"
                turn = "x"
                state[0][2] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_4.addEventListener("click", () => {

        if(cell_4.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_4.innerHTML = "x"
                turn = "o"
                state[1][0] = 1
            } else {
                cell_4.innerHTML = "o"
                turn = "x"
                state[1][0] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_5.addEventListener("click", () => {

        if(cell_5.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_5.innerHTML = "x"
                turn = "o"
                state[1][1] = 1
            } else {
                cell_5.innerHTML = "o"
                turn = "x"
                state[1][1] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_6.addEventListener("click", () => {

        if(cell_6.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_6.innerHTML = "x"
                turn = "o"
                state[1][2] = 1
            } else {
                cell_6.innerHTML = "o"
                turn = "x"
                state[1][2] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_7.addEventListener("click", () => {

        if(cell_7.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_7.innerHTML = "x"
                turn = "o"
                state[2][0] = 1
            } else {
                cell_7.innerHTML = "o"
                turn = "x"
                state[2][0] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_8.addEventListener("click", () => {

        if(cell_8.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_8.innerHTML = "x"
                turn = "o"
                state[2][1] = 1
            } else {
                cell_8.innerHTML = "o"
                turn = "x"
                state[2][1] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)

    cell_9.addEventListener("click", () => {

        if(cell_9.innerHTML.length !== 1) {
            if (turn === "x") {
                cell_9.innerHTML = "x"
                turn = "o"
                state[2][2] = 1
            } else {
                cell_9.innerHTML = "o"
                turn = "x"
                state[2][2] = 0
            }
        } else {
            alert("You cant do that! please wait your turn!")
        }
        turnCounter.innerHTML = turn
    }, true)
}