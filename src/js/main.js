import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', function() {

const nameInput = document.querySelector("#name");
const cardNumberInput = document.querySelector("#number");
const cvvInput = document.querySelector("#cvv");
const dateInput = document.querySelector("#expiration")

const invalidName = document.querySelector(".name")
const invalidNum = document.querySelector(".number")
const invalidCvv = document.querySelector(".cvv")
const invalidDate = document.querySelector('.date')
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
    return /^[0-9]{4}$/.test(cvvInput.value)
}

let validDate = () =>{
    return dateInput.value != "" ? true : false;
}

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
})

function checkDisplay(a){
    return a ? "none":"block";
} 


const forms = document.querySelectorAll('form');

forms.forEach(item => {
    postData(item);
})

function postData(form){

   
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const formData = new FormData(form);

        const object = {};

        if(validName() && validCardNumber() && validCvv()){

            formData.forEach(function(value, key){
            object[key] = value;
            });

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            }).then(response  => {
                console.log(response.status);
            });
            
            invalidName.style.display ="none";
            invalidCvv.style.display = "none";
            invalidNum.style.display = "none";
        }else{
            invalidName.style.display = checkDisplay(validName());
            invalidNum.style.display = checkDisplay(validCardNumber());
            invalidCvv.style.display = checkDisplay(validCvv());
            invalidDate.style.display = checkDisplay(validDate());;
           
        }
        
    })
}

});