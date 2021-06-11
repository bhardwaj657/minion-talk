var btnTranslate = document.querySelector("#btn-translate");
var  txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-txt");
var serverURL= "https://api.funtranslations.com/translate/minion.json";
function getTranslatedURL(text) {
    return serverURL + "?" + "text:" + text
}
function clickHandler(){
    var inputText = txtInput.value;
    fetch(getTranslatedURL(inputText))
    .then(response=> response.json())
    .then(json=> {
        var translatedText= json.contents.translated;
        outputDiv.innerText=translatedText;
    })
   
    // console.log("clicked!");
    // console.log("input",txtInput.value);
}
btnTranslate.addEventListener("click",clickHandler);
