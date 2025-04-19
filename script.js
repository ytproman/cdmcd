const getSignal = document.getElementById("get-signal"),
    stopSignalTimeBlock = document.getElementById("stop-signal-time-block"),
    printSignal = document.getElementById("print-signal"),
    stopProgress = document.getElementById("stop-progress"),
    errorNotification = document.getElementById("error-notification"),
    errorProgress = document.getElementById("error-progress"),
    textError = document.getElementById("text-error"),
    getSignalTwo = document.getElementById("get-signal-two"),
    errorExit = document.getElementById("error-exit");

const arrayCoef = [];
let countRound = 0;

function grabCoef(){
    const countOfRounds = prompt('Type how many coef to write:');
    for (let i = 0; i < countOfRounds; i++){
        arrayCoef.push(prompt(`type coef: ${i+1}/countOfRounds\nin this formate: 1.32/1.3/1`));
    }
    // let bar = confirm('Confirm or deny');
}

getSignal.onclick = function () {
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
