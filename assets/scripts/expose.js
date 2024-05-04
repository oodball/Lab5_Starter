//expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.getElementsByTagName("img")[0];
  const hornAudio = document.getElementsByTagName("audio")[0];
  var play = 0;


  hornSelect.addEventListener("change", (event) => {
    const selected = event.target.value;
    switch (selected) {
      case 'air-horn':
        hornImage.src = './assets/images/air-horn.svg';
        hornAudio.src = './assets/audio/air-horn.mp3';
        play = 0;
        break;
      case 'car-horn': 
        hornImage.src = './assets/images/car-horn.svg';
        hornAudio.src = './assets/audio/car-horn.mp3';
        play = 0;
        break;
      case 'party-horn':
        hornImage.src = './assets/images/party-horn.svg';
        hornAudio.src = './assets/audio/party-horn.mp3';
        play = 1;
        break;
      default:
        hornImage.src = './assets/images/no-image.png';
        play = 0;
    }
  });

  // Volume slider
  let volumeControl = document.getElementById("volume");
  const volumeImage = document.getElementsByTagName("img")[1];
  // let volumeImage = document.querySelector("#volume-controls img");

  volumeControl.addEventListener("input", function(e) {
    var audioVolume = e.currentTarget.value / 100;
    hornAudio.volume = audioVolume;
    
    if (audioVolume < 0.01) {
      volumeImage.src = './assets/icons/volume-level-0.svg';
    } else if (audioVolume < 0.33) {
      volumeImage.src = './assets/icons/volume-level-1.svg';
    } else if (audioVolume < 0.67) {
      volumeImage.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = './assets/icons/volume-level-3.svg';
    }
  });


  document.querySelector('button').addEventListener('click', function() {

    const select = hornSelect.value;

    switch (select){
      case 'party-horn':
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
        emojis: ['🌈', '✨', '💫', '🌸'],
         });
        hornAudio.play();
        break; 
      default:
        hornAudio.play();
        
    }
  });
}
