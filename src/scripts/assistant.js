const btn = document.querySelector("#Speak");
const text = document.querySelector("#userText");

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

function Random(maximum){
    Math.floor(Math.random() * maximum);
}

const recognition = new SpeechRecognition();
const greetingCommands = ["Hello", "Hi", "Heya", "Howdy", "Namaste","Hola", "Hey", "Hey there"]

recognition.onstart = () => {
    console.log("Please Speak!")
}

recognition.onresult = (event) => {
  const crntText = event.resultIndex;
  const transcript = event.results[crntText][0].transcript;
  console.log(transcript)
  if(transcript.includes = greetingCommands){
      responsiveVoice.speak(greetingCommands[Random(greetingCommands.length)] + "User")
      console.log(greetingCommands[Random(greetingCommands.length)] + "User");
  }
}

// const day = new Date();
// var h = day.getHours();

btn.addEventListener("click",() => {
    recognition.start();
})