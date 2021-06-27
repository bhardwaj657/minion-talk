var btnTranslate = document.querySelector("#btn-translate");
var  txtInput= document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-txt");
var serverURL= "https://api.funtranslations.com/translate/minion.json";
function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error",error)
    alert("Ooops! something went wrong")
}
function clickHandler(){
var inputText= txtInput.value;    
fetch(getTranslatedURL(inputText))
.then(response => response.json())
.then(json =>{
    var translatedText=json.contents.translated;
    outputDiv.innerText= translatedText;
})
.catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler);