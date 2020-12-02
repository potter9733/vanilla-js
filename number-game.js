const range = document.querySelector(".js-range"),
    guide = document.querySelector(".js-guide"),
    pred = document.querySelector(".js-pred"),
    btn = document.querySelector(".btn"),
    summary = document.querySelector(".js-summary"),
    result = document.querySelector(".js-result")

function wonOrLost(num1, num2) {

    if (num1 >= num2) {
        result.innerText = 'You won!'
    } else {
        result.innerText = 'You lost!'
    }
}

function handleBtn() {
    const predNum = parseInt(pred.value);
    const rangeNum = range.value;
    const randomNum = Math.floor(Math.random() * rangeNum)
    const savedNum = localStorage.getItem("firstRandomNumber")
    if(savedNum === null) {
        localStorage.setItem("firstRandomNumber", randomNum)
        wonOrLost(predNum, randomNum)
    } else {
        wonOrLost(predNum, savedNum)
    }
    summary.innerText = `You chose: ${predNum}, the machine chose: ${randomNum}.`
}

function handleChange() {
    localStorage.clear();
    const rangeNum = range.value
    guide.innerText = `Generate a number between 0 and ${rangeNum}`;
}

function init() {
    range.oninput = handleChange;
    btn.addEventListener("click", handleBtn);
}

init();