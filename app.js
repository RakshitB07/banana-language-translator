var btnTranslate = document.querySelector("#btn-translate");

function clickHandler() {
    outputDiv.innerText = "Translation: " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler)

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");