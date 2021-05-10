const btn = document.querySelector("#btn");
const text = document.querySelector("#userText");

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log("Assistant activated !! Now you can speak the microphone !!")
}

recognition.onresult = (event) => {
    const crntText = event.resultIndex;
    const transcript  = event.results[crntText][0].transcript;
    text.textContent = transcript;
}

btn.addEventListener("click",() => {
    recognition.start();
})