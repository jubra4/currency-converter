let amountElement = document.querySelector(".js-price");
let currencyElement = document.querySelector(".js-value");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.3504;
let rateGBP = 5.3504;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Formularz został wysłany');

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = currency / rateEUR;
            break;

        case "GBP":
            result = currency / rateGBR;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;

});