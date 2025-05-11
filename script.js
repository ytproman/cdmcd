const arrayCoef = [];
let countRound = 0;

const coefFormWrapper = document.getElementById("coef-form-wrapper");
const generateFieldsBtn = document.getElementById("generate-fields");
const submitBtn = document.getElementById("submit-coefs");
const dynamicFields = document.getElementById("dynamic-fields");
const coefCountInput = document.getElementById("coef-count");

generateFieldsBtn.onclick = () => {
    const count = parseInt(coefCountInput.value);
    if (!count || count <= 0) return;

    dynamicFields.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = `Коэффициент ${i + 1} (например: 1.45/1.2/1)`;
        input.required = true;
        input.classList.add("coef-input");
        dynamicFields.appendChild(input);
    }
    submitBtn.style.display = "inline-block";
};

submitBtn.onclick = () => {
    const inputs = document.querySelectorAll(".coef-input");
    arrayCoef.length = 0; // очищаем массив перед новым заполнением

    inputs.forEach(input => {
        const value = input.value.trim();
        if (value !== "") {
            arrayCoef.push(value);
        }
    });

    if (arrayCoef.length > 0) {
        coefFormWrapper.style.display = "none";
        console.log("Сохранённые коэффициенты:", arrayCoef);
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
};

// Кнопка для отображения коэффициента
const getSignal = document.getElementById("get-signal");
const printSignal = document.getElementById("print-signal");

getSignal.onclick = function () {
    if (countRound >= arrayCoef.length) {
        alert("Все коэффициенты уже показаны");
        return;
    }

    let receivingSignal = arrayCoef[countRound];
    if (receivingSignal.toString().length == 3) {
        receivingSignal += "0";
    }
    if (receivingSignal.toString().length == 1) {
        receivingSignal += ".00";
    }
    printSignal.innerHTML = `${receivingSignal}x`;
    printSignal.classList.remove("deactivate");
    countRound++;
};
