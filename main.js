let userInput = document.getElementById("userInput").value;
let submitButton = document.getElementById("submitButton");
let addElementButton = document.getElementById("addElementButton");
let removeElementButton = document.getElementById("removeElementButton");
let findMaxButton = document.getElementById("findMaxButton");
let sortArrayButton = document.getElementById("sortArrayButton");
let concateArrayButton = document.getElementById("concateArrayButton");
let displayOutputArray = document.getElementById("displayOutputArray");
let reduceButton =document.getElementById("reduceButton");


submitButton.addEventListener("click", handleSubmit);
addElementButton.addEventListener("click", handleAddElement);
removeElementButton.addEventListener("click", handleRemoveElement);
findMaxButton.addEventListener("click", handleFindMax);
sortArrayButton.addEventListener("click", handleSortArray);
concateArrayButton.addEventListener("click", handleConcateArray);
reduceButton.addEventListener("click", handleReduce);


function handleSubmit() {
    displayOutputArray.innerHTML = userInput;
}



function handleAddElement() {
    let addElementPrompt = prompt("Enter the element to add.")
    if (addElementPrompt !== null && addElementPrompt.trim() !== ""){
        if(displayOutputArray.innerHTML !== "") {
            displayOutputArray.innerHTML += ", "
        }
        displayOutputArray.innerHTML += addElementPrompt;
    }
}


function handleRemoveElement() {

    let removeElementPrompt = prompt("Enter a element to remove.")
    userInput.includes(removeElementPrompt)
    if (true) {
        delete(removeElementPrompt)// fix this part of the code not there just yet 
    }

}

function handleFindMax() {

}

function handleSortArray() {

}

function handleConcateArray() {

}

function handleReduce() {

}