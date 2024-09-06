// Check if the browser supports the Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const start_btn = document.getElementById('btn') ; 

const ai_say_okey = new SpeechSynthesisUtterance("Okey");
const ai_say_wellcome = new SpeechSynthesisUtterance("Welcome to this tutorial!");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  ai_say_okey.voice = voices[0]; // Choose a specific voice



recognition.onstart = function() {
    document.getElementById('status').textContent = "Listening...";
    start_btn.style.visibility = 'hidden' ;
};

recognition.onspeechend = function() {
    document.getElementById('status').textContent = "Stopped listening...";
    start_btn.style.visibility = 'visible' ;
    recognition.stop();
};

recognition.onresult = function(event) {
    const command = event.results[0][0].transcript.toLowerCase();
    document.getElementById('status').textContent = `You said: "${command}"`;
if (command.includes('jarvis')) {
    console.log(command)
    if (command.includes("open youtube")) {
        speechSynthesis.speak(ai_say_okey );
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open facebook")) {
        speechSynthesis.speak(ai_say_okey );
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        speechSynthesis.speak(ai_say_okey );
    } else if (command.includes("open my website")) {
        speechSynthesis.speak(ai_say_okey );
        window.open("https://tanjim-tawhid.github.io/Protfolio/", "_blank");  // Replace with your website
    } else if (command.includes("open cd")) {
        speechSynthesis.speak(ai_say_okey );
        window.open("https://www.codingal.com/bn-BD/student/dashboard/", "_blank");
    } else if (command.includes("open ca")) {
        speechSynthesis.speak(ai_say_okey );
        window.open("https://chatgpt.com/?sso=", "_blank");
    } else if (command.includes("open sp") || command.includes("open nsp")){
        speechSynthesis.speak(ai_say_okey );
        window.open("https://scratch.mit.edu/", "_blank");
    }
     else {
        document.getElementById('status').textContent = "Command not recognized.";
    }
}
};

function startListening() {
    recognition.start();
}