const btn = document.querySelector("#btn");
const text = document.querySelector("#userText");

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    
    responsiveVoice.speak("Assistant activated !! Now you can speak in the microphone !!")
}

recognition.onresult = (event) => {
  const crntText = event.resultIndex;
  const transcript = event.results[crntText][0].transcript;
  responsiveVoice.speak(transcript);
  console.log(transcript); 
}

const day = new Date();
var h = day.getHours();

btn.addEventListener("click",() => {
    recognition.start();
})