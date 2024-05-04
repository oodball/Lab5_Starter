
// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    var voiceSelect = document.getElementById("voice-select");
    const synth = window.speechSynthesis;
    function populateVoiceList() {
    var voices = synth.getVoices();

    voices.forEach(function(voice) {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = voice.name;

        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);   

        voiceSelect.appendChild(option);
    });
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    const userTextInput = document.getElementById("text-to-speak");
    const faceImage = document.getElementsByTagName("img")[0];

    document.querySelector('button').addEventListener('click', function() {
        
        const text = userTextInput.value;
        const utterance = new SpeechSynthesisUtterance(text);

        const selectedOption = voiceSelect.value;
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name === selectedOption);

        utterance.onend = function() {
            faceImage.src = './assets/images/smiling.png';   
        };

        faceImage.src = './assets/images/smiling-open.png';   
        speechSynthesis.speak(utterance).value;

    });   
}