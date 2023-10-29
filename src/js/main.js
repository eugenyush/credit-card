import '../scss/style.scss';


const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const cvvInput = document.querySelector("#cvv");

const invalidName = document.querySelector(".name")
const invalidNum = document.querySelector(".number")
const invalidCvv = document.querySelector(".cvv")
const imgCard = document.querySelector("#img-card");

const btn = document.querySelector("#btn");


let visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');

let mastercard = new RegExp('^5[1-5][0-9]{14}$');
let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');

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
    !validCvv() ? invalidCvv.style.display = "block": invalidCvv.style.display = "none";
})

let checkCard = (n) => {
        if(visa.test(n)){
           return "visa";
        }
        if(mastercard.test(n) || mastercard2.test(n)){
            return "mastercard";
        }
}

cardNumberInput.addEventListener("change", (e)=>{
    imgCard.src = `/public/imges/${checkCard(cardNumberInput.value)}.png`;
    !validCardNumber() ? invalidNum.style.display = "block":invalidNum.style.display = "none";
})