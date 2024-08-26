function showError(errorElement, message) {
    errorElement.innerText = message;

    errorElement.className = "error active";
}

function showCompleteDisplay(formSubmitEvent) {
    const completeDisplay = document.getElementById("complete-display");
    const formDisplay = document.getElementById("form-display");

    formSubmitEvent.preventDefault();
    completeDisplay.removeAttribute("hidden");
    completeDisplay.classList.add("visible");
    formDisplay.setAttribute("hidden", "");
}

function resetToFormDisplay() {
    location.reload();
}

const confirmButton = document.getElementById("confirm-button");
confirmButton.addEventListener("click", (event) => {
    showCompleteDisplay(event);
});

const continueButton = document.getElementById("continue-button");
continueButton.addEventListener("click", (event) => {
    resetToFormDisplay();
});

const nameDisplay = document.getElementById("display-name");
const nameInput = document.getElementById("card-name");
const nameError = nameInput.parentElement.querySelector(".error");

nameInput.addEventListener("input", (event) => {
    nameDisplay.innerText = nameInput.value;

    if (nameInput.validity.valid) {
        nameError.textContent = "";
        nameError.className = "error";
    } else {
        if (nameInput.validity.valueMissing) {
            showError(nameError, "You need to enter a name.");
        }
    }
});

const numberDisplay = document.getElementById("display-number");
const numberInput = document.getElementById("card-number");
const numberError = numberInput.parentElement.querySelector(".error");

numberInput.addEventListener("input", (event) => {
    const cardNumber = numberInput.value;

    let spacedCardNumber = "";
    for (let i = 0; i < cardNumber.length; i++) {
        spacedCardNumber += cardNumber[i];
        if (((i + 1) % 4 == 0) & (i < 15)) {
            spacedCardNumber += " ";
        }
    }

    numberDisplay.innerText = spacedCardNumber;

    if (numberInput.validity.valid) {
        numberError.textContent = "";
        numberError.className = "error";
    } else {
        if (numberInput.validity.valueMissing) {
            showError(numberError, "You need to enter a number.");
        } else if (numberInput.validity.patternMismatch) {
            showError(numberError, "Must be number of length 16");
        }
    }
});

const monthDisplay = document.getElementById("display-month");
const monthInput = document.getElementById("card-month");
const monthError = monthInput.parentElement.querySelector(".error");

monthInput.addEventListener("input", (event) => {
    monthDisplay.innerText = monthInput.value;

    if (monthInput.validity.valid) {
        monthError.textContent = "";
        monthError.className = "error";
    } else {
        if (monthInput.validity.valueMissing) {
            showError(monthError, "Cannot be blank");
        } else if (monthInput.validity.patternMismatch) {
            showError(monthError, "Must be 2 digits");
        }
    }
});

const yearDisplay = document.getElementById("display-year");
const yearInput = document.getElementById("card-year");
const yearError = yearInput.parentElement.querySelector(".error");

yearInput.addEventListener("input", (event) => {
    yearDisplay.innerText = yearInput.value;

    if (yearInput.validity.valid) {
        yearError.textContent = "";
        yearError.className = "error";
    } else {
        if (yearInput.validity.valueMissing) {
            showError(yearError, "Cannot be blank");
        } else if (yearInput.validity.patternMismatch) {
            showError(yearError, "Must be 2 digits");
        }
    }
});

const cvcDisplay = document.getElementById("display-cvc");
const cvcInput = document.getElementById("card-cvc");
const cvcError = cvcInput.parentElement.querySelector(".error");

cvcInput.addEventListener("input", (event) => {
    cvcDisplay.innerText = cvcInput.value;

    if (cvcInput.validity.valid) {
        cvcError.textContent = "";
        cvcError.className = "error";
    } else {
        if (cvcInput.validity.valueMissing) {
            showError(cvcError, "Cannot be blank");
        } else if (cvcInput.validity.patternMismatch) {
            showError(cvcError, "Must be 3 digits");
        }
    }
});
