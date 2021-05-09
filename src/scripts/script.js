const auth = firebase.auth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");

const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");

const userDetails = document.getElementById("userDetails");
// const nav = document.getElementById("nav");

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<img src="${user.photoURL}"><div class="userInfo"><h3>${user.displayName}</h3><p>${user.email}</p></div>`;
    document.getElementById("whenSignedOut").style.display = "none";
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});


// var transcript,a,date,hours;
// var greetings = ['hello','hey there','hi','howdy','hola','hi there','hey']; // A list of greetings that the assistant replies when the transcript is equal to "hello"
// var music_cmnds = ['music','tune','songs','rhythm'];


// function GreetMe(){
//     date1 = new Date();
//     hours = date1.getHours();
//     if(hours>0 && hours<12){
//         responsiveVoice.speak("Good Morning User")
//     }
//     else if(hours=>12 && hours<4){
//         responsiveVoice.speak("Good Afternoon User")
//     }
//     else{
//         responsiveVoice.speak("Good Evening User")
//     }
// }

// function randomNumber(min, max) {  
//     min = Math.ceil(min); 
//     max = Math.floor(max); 
//     return Math.floor(Math.random() * (max - min + 1)) + min; 
// }  
// GreetMe()
// function Speech(){
// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// var recognition = new SpeechRecognition();
// recognition.onstart = function() {
//     console.log("We are listening. Try speaking into the microphone.");
// };

// recognition.onspeechend = function() {
//     recognition.stop();
// }
// recognition.onresult = function(event) {
//     transcript = event.results[0][0].transcript;

//     //---------------------Ignore this part in comments---------------------
//     document.getElementById("result").innerHTML = "You spoke: "+transcript;
//     if(greetings.includes(transcript)){
//         a = randomNumber(0,greetings.length);
//         responsiveVoice.speak(greetings[a]); 
//     }
//     else if(transcript.includes("time")){
//         date = new Date();       
//         responsiveVoice.speak("The time is now "+date.getHours()+" hours "+date.getMinutes()+" minutes and "+date.getSeconds()+" seconds");
//     }
//     else if(transcript.includes("YouTube")){
//         responsiveVoice.speak("Opening YouTube")
//         window.open("https://www.youtube.com");
//     }
//     else if(transcript.includes("calculator")){
//         responsiveVoice.speak("Opening Calculator");
//         window.open("https://web-calculator-pseudopythonic.netlify.app/");
//     }
//     else if(transcript.includes("search")){
//         responsiveVoice.speak("Opening Search Engine");
//         window.open("https://searchify-pseudopythonic.netlify.app/");
//     }
//     else if(transcript.includes("good morning")){
//         responsiveVoice.speak("Good morning");
//     }
// };
// recognition.start();
// }