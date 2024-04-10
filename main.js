
let userInput;
let submitButton = document.getElementById("submitButton");
let addElementButton = document.getElementById("addElementButton");
let removeElementButton = document.getElementById("removeElementButton");
let findMaxButton = document.getElementById("findMaxButton");
let sortArrayButton = document.getElementById("sortArrayButton");
let concateArrayButton = document.getElementById("concateArrayButton");
let displayOutputArray = document.getElementById("displayOutputArray");
let reduceButton =document.getElementById("reduceButton");
let reverseArrayButton = document.getElementById("reverseArrayButton");

//Added event listeners for button clicks
submitButton.addEventListener("click", handleSubmit);
addElementButton.addEventListener("click", handleAddElement);
removeElementButton.addEventListener("click", handleRemoveElement);
findMaxButton.addEventListener("click", handleFindMax);
sortArrayButton.addEventListener("click", handleSortArray);
concateArrayButton.addEventListener("click", handleConcateArray);
reduceButton.addEventListener("click", handleReduce);
reverseArrayButton.addEventListener("click", handleReverseArray);


function handleReverseArray() {
    let newArry = userInput.split(",");
    let reverseArr = newArry.reverse();
    let newReverseArry = reverseArr.join(",")
    displayOutputArray.innerHTML = newReverseArry;
}


function handleSubmit() {
     userInput = document.getElementById("userInput").value;
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
    if (userInput.includes(removeElementPrompt)) {
        let userAry = userInput.split(",");
        userAry = userAry.filter(element => element.trim() !== removeElementPrompt)
        userInput = userAry.join(",")
        displayOutputArray.innerHTML = userInput;
    }else {
        alert("Element not found in array.")
    }

    

}

function handleFindMax() {
   let newAry = userInput.split(",").map(Number);
   let max = Math.max(...newAry);
  
   displayOutputArray.innerHTML = max;

}

function handleSortArray() {
    let splitArry = userInput.split(",");
    let sorted = splitArry.sort();
    let newArry = sorted.join(",")
    displayOutputArray.innerHTML = newArry;
}

function handleConcateArray() {
    let concatPrompt = prompt("Enter a element you would like to concat to array.");
    let splitArry= userInput.split(",");
    let concatArry = splitArry.concat(concatPrompt);
    let newArry = concatArry.join(",")
    displayOutputArray.innerHTML = newArry;
}

function handleReduce() {
    let newArry= userInput.split(",");
    let arrySum = 0;
    for (let i = 0; i < newArry.length; i++) {
        arrySum = arrySum + parseInt(newArry[i]);
        
    }
    alert(arrySum)
}
