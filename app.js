var btnTranslate = document.querySelector("#btn-translate");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    // outputDiv.innerText = "Translation: " + txtInput.value;

    var inputText = txtInput.value; //Taking input

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occurred", error);
    alert("Server seems to be down. Try later!")
}