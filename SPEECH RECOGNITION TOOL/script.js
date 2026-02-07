// Start speech recognition
function startRecognition() {

    // Check browser support
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech Recognition not supported!");
        return;
    }

    // Create recognition object
    let recognition = new SpeechRecognition();

    // Set language
    recognition.lang = "en-US";

    // When speech is detected
    recognition.onresult = function(event) {
        document.getElementById("output").value =
            event.results[0][0].transcript;
    };

    // Start listening
    recognition.start();
}
