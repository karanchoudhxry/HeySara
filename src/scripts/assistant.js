const btn = document.querySelector("#btn");
const text = document.querySelector("#userText");

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log("Assistant activated !! Now you can speak the microphone !!")
}

recognition.onresult = (event) => {
  const crntText = event.resultIndex;
  const transcript = event.results[crntText][0].transcript;
  responsiveVoice.speak(transcript);
  console.log(transcript); 
}

const day = new Date();
var h = day.getHours();

function greetings() {
    if (h < 12) {
      responsiveVoice.speak("Good Morning User!");
    } else if (h >= 12 && h < 16) {
      responsiveVoice.speak("Good Afternoon User!");
    } else if (h >= 16) {
      responsiveVoice.speak("Good evening User!");
    }
  }
greetings();

btn.addEventListener("click",() => {
    recognition.start();
})