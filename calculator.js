const calText = document.querySelector(".js-cal"),
    calNum = document.querySelector(".js-num"),
    calOper = document.querySelector(".js-operation"),
    calEqual = document.querySelector(".js-equal");

const NUM = "number"
var NUMARRAY = [0]

function Oper(arr) {
    if (arr[1] === "+") {
        arr = [arr[0] + arr[2]]
        return arr
    } else if (arr[1] === "-") {
        arr = [arr[0] - arr[2]]
        return arr
    } else if (arr[1] === "*") {
        arr = [arr[0] * arr[2]]
        return arr
    } else if (arr[1] === "/") {
        
        arr = [arr[0] / arr[2]]
        return arr
    } else {
        return arr
    }
    
}

function handleOper(event) {
    const btn = event.target;
    const currentValue = btn.value;
    
    if(currentValue === "C") {
        calText.innerText = 0
        NUMARRAY = [0]
        localStorage.clear();
    } else if(currentValue === "+") {
        if (NUMARRAY.length === 3) {
            NUMARRAY = Oper(NUMARRAY)
        }
        NUMARRAY.push("+");
        NUMARRAY.push(0);
        localStorage.setItem(NUM, NUMARRAY)
        calText.innerText = NUMARRAY[0]
    } else if(currentValue === "-") {
        if (NUMARRAY.length === 3) {
            NUMARRAY = Oper(NUMARRAY)
        }
        NUMARRAY.push("-");
        NUMARRAY.push(0);
        localStorage.setItem(NUM, NUMARRAY)
        calText.innerText = NUMARRAY[0]
    } else if(currentValue === "*") {
        if (NUMARRAY.length === 3) {
            NUMARRAY = Oper(NUMARRAY)
        }
        NUMARRAY.push("*");
        NUMARRAY.push(0);
        localStorage.setItem(NUM, NUMARRAY)
        calText.innerText = NUMARRAY[0]
    } else if(currentValue === "/") {
        if (NUMARRAY.length === 3) {
            NUMARRAY = Oper(NUMARRAY)
        }
        NUMARRAY.push("/");
        NUMARRAY.push(0);
        localStorage.setItem(NUM, NUMARRAY)
        calText.innerText = NUMARRAY[0]
    }
}

function handleEqual() {
    NUMARRAY = Oper(NUMARRAY)
    localStorage.setItem(NUM, NUMARRAY)
    calText.innerText = NUMARRAY[NUMARRAY.length-1]
}

function handleNum(event){
    const btn = event.target;
    if (btn.value !== undefined) {
        const currentValue = parseInt(btn.value);
        NUMARRAY[NUMARRAY.length-1] = NUMARRAY[NUMARRAY.length-1] * 10 + currentValue
        localStorage.setItem(NUM, NUMARRAY)
        calText.innerText = NUMARRAY[NUMARRAY.length-1]
    }
}

function init() {
    NUMARRAY = [0]
    calText.innerText = 0
    calNum.addEventListener("click", handleNum);
    calOper.addEventListener("click", handleOper);
    calEqual.addEventListener("click", handleEqual);

}

init();