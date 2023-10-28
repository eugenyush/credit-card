import '../scss/style.scss';


const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const cvvInput = document.querySelector("#cvv");
const invalidName = document.querySelector(".name")
const invalidNum = document.querySelector(".number")
const invalidCvv = document.querySelector(".cvv")
const btn = document.querySelector("#btn");

let validName = () => {
    return /^[A-z ]+$/.test(nameInput.value)
}

let validCardNumber = () => {
    return /^[0-9]{13,19}$/.test(cardNumberInput.value)
}

let validCvv = () => {
    return /^[0-9]$/.test(cvvInput.value)
}

btn.addEventListener("click", (e)=>{
    !validName() ? invalidName.style.display = "block":invalidName.style.display = "none";
    !validCardNumber() ? invalidNum.style.display = "block":invalidNum.style.display = "none";
    !validCvv() ? invalidCvv.style.display = "block": invalidCvv.style.display = "none";
})
