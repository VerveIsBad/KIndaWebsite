let state = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

let debug = false // change to true for debugging
let turn = "o"


function clear() {
    /*
    Clears the board and resets the playstate
    **/
    cell_1.innerHTML = ""
    cell_2.innerHTML = ""
    cell_3.innerHTML = ""
    cell_4.innerHTML = ""
    cell_5.innerHTML = ""
    cell_6.innerHTML = ""
    cell_7.innerHTML = ""
    cell_8.innerHTML = ""
    cell_9.innerHTML = ""
    state = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]
    return true
}

function check(arr1, a) {
    /*
    Used to check if X or O is the only value in 
    the given array / list
    **/
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === a) {
            continue
        } else {
            return false 
        }
    }
    return true
}

function checkForWinState() {
    /* Checks for all possible win patterns
    **/


    // check for row wins
    if (
        check(state[0], "x") ||
        check(state[1], "x") ||
        check(state[2], "x")
    ) {
        setTimeout( () => {
            alert("X wins!")
            }, 20)
        clear()
    } else if (
        check(state[0], "o") ||
        check(state[1], "o") ||
        check(state[2], "o")
    ) {
        setTimeout( () => {
        alert("O wins!")
        }, 20)
        clear()
    } else {
        null
    }
    // check for row wins 


    // check for collums wins
    if (
        check( [ state[0][0], state[1][0], state[2][0] ], "x") || // collumn 1 for x 
        check( [ state[0][1], state[1][1], state[2][1] ], "x") || // collumn 2 for x
        check( [ state[0][2], state[1][2], state[2][2] ], "x")    // collumn 3 for x
    ) {
        setTimeout( () => {
        alert("X wins!")
        }, 20)
        clear()
    } else if (
        check( [ state[0][0], state[1][0], state[2][0] ], "o") || // collumn 1 for o
        check( [ state[0][1], state[1][1], state[2][1] ], "o") || // collumn 2 for o
        check( [ state[0][2], state[1][2], state[2][2] ], "o")    // collumn 3 for o 
    ) {
        setTimeout( () => {
        alert("O wins!")
        }, 20)
        clear()
    }
    // check for collumn wins


    // check for diagnol wins
    if (
        check( [ state[2][0], state[1][1], state[0][2] ], "x") ||
        check( [ state[2][2], state[1][1], state[0][0] ], "x")
    ) {
        alert("X wins!")
        clear()
    } else if (
        check( [ state[2][0], state[1][1], state[0][2] ], "o") ||
        check( [ state[2][2], state[1][1], state[0][0] ], "o") 
    ) {
        setTimeout( () => {
        alert("O wins!")
        }, 20)
        clear()
    }
    // check for diagnol wins

/*    0 1 2
   0 [0,0,0],
   1 [0,0,0],
   2 [0,0,0]
**/

}

function updateGameState(cell, row, collumn) {
    /* updates the cell, adds it to game state grid, checks for win state
    cell = Cell to update
    row = The row that the cell is located at in the game state grid
    collumn = The column that the cell is located at in the game state grid
    **/
    if ( cell.innerHTML.length !== 1) {
        if (turn === "x") {
            cell.innerHTML = "x"
            state[row][collumn] = "x"
            turn = "o"
        } else {
            cell.innerHTML = "o"
            state[row][collumn] = "o"
            turn = "x"
        }
        turnCounter.innerHTML = `It is ${turn}'s turn`
        if (debug) {
            console.log("------")
            console.log(state[0])
            console.log(state[1])
            console.log(state[2])
            console.log("------")
        }
    } else {
        alert("You cant do that! Please wait Your turn.")

    }
    checkForWinState()
}

window.onload = () => { 
    // cells 
    let cell_1 = document.getElementById("cell_1")
    let cell_2 = document.getElementById("cell_2")
    let cell_3 = document.getElementById("cell_3")
    let cell_4 = document.getElementById("cell_4")
    let cell_5 = document.getElementById("cell_5")
    let cell_6 = document.getElementById("cell_6")
    let cell_7 = document.getElementById("cell_7")
    let cell_8 = document.getElementById("cell_8")
    let cell_9 = document.getElementById("cell_9")
    // cells 

    let clearbtn = document.getElementById("clearButton")
    let turnCounter = document.getElementById("turnCounter")
    turnCounter.innerHTML = `It is ${turn}'s turn`

    /*

    --- CELL MAP ---

        0        1         2      
  0  | cell_1 | cell_2 | cell_3 |   
     ----------------------------
  1  | cell_4 | cell_5 | cell_6 |
     ----------------------------
  2  | cell_7 | cell_8 | cell_9 |
    
    --- CELL MAP ---
    
    **/

    clearbtn.addEventListener("click", () => {
        clear()
    }, true)

    cell_1.addEventListener("click", ()  => {
        updateGameState(cell_1,0,0)
    }, true)

    cell_2.addEventListener("click", () => {
        updateGameState(cell_2,0,1)
    }, true)

    cell_3.addEventListener("click", () => {
        updateGameState(cell_3,0,2)
    }, true)

    cell_4.addEventListener("click", () => {
        updateGameState(cell_4,1,0)
    }, true)

    cell_5.addEventListener("click", () => {
        updateGameState(cell_5,1,1)
    }, true)

    cell_6.addEventListener("click", () => {
        updateGameState(cell_6,1,2)
    }, true)

    cell_7.addEventListener("click", () => {
        updateGameState(cell_7,2,0)
    }, true)

    cell_8.addEventListener("click", () => {
        updateGameState(cell_8,2,1)
    }, true)

    cell_9.addEventListener("click", () => {
        updateGameState(cell_9,2,2)
    }, true)
}