const select = document.querySelector("select");

const COUNTRY = "country",
    INDEX = 'index'

function saveCountry(text, n) {
    localStorage.setItem(COUNTRY, text);
    localStorage.setItem(INDEX, n);

}

function handleSelect() {
    const currentValue = select.value;
    const currentIndex = select.selectedIndex;
    saveCountry(currentValue, currentIndex);
}


function init() {
    select.addEventListener("change", handleSelect);
    
    const selected = localStorage.getItem(INDEX)
    if (selected !== null) {
        select.options[selected].selected = true;
    }
    
}


/*
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
*/



init();