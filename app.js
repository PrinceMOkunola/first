let previousEl = document.getElementById("previous-el")
let numOfItemsEl = document.getElementById("numOfItems-el")
let count = 0
function increment(){
    count = count + 1
    console.log(count)
     numOfItemsEl.textContent = count
}
function save(){
    let countStr = count + " - "
    previousEl.textContent += countStr
    numOfItemsEl.textContent = 0
    count = 0
}
let errorMsg = document.getElementById("errormsg")
function purchase(){
    errorMsg.textContent = "sorry we could not process your request at this time😥"
}
