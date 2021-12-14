let count = 0


window.onload = () => {

    // ----- get buttons ----- // 
    const addToCount = document.getElementById("addCount")
    const subtractFromCount = document.getElementById("subtractCount")
    const clearCount = document.getElementById("clearCount")
    // ----- get buttons ----- // 

    let counter = document.getElementById("currentCount") // get counter 

    counter.innerHTML = count

    addToCount.addEventListener("click", () => {
        count++
        counter.innerHTML = count
    }, true)

    subtractFromCount.addEventListener("click", () => {
        count--
        counter.innerHTML = count
    })

    clearCount.addEventListener("click", () => {
        count = 0
        counter.innerHTML = count
    })

}
