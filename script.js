// Check if the browser supports the Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const start_btn = document.getElementById('btn') ; 

//hi


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
        window.open("https://www.youtube.com", "_blank");
    } else if (command.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank");
    } else if (command.includes("open github")) {
        window.open("https://www.github.com", "_blank");
    } else if (command.includes("open my website")) {
        window.open("https://tanjim-tawhid.github.io/Protfolio/", "_blank");  // Replace with your website
    } else if (command.includes("open cd")) {
        window.open("https://www.codingal.com/bn-BD/student/dashboard/", "_blank");
    } else if (command.includes("open ca")) {
        window.open("https://chatgpt.com/?sso=", "_blank");
    } 
     else {
        document.getElementById('status').textContent = "Command not recognized.";
    }
}
};

function startListening() {
    recognition.start();
}