let volumeNumber = document.getElementById('volume-number');
let volumeImage = document.getElementById('volume-image');
let volumeSlider = document.getElementById('volume-slider');

let radioAirHorn = document.getElementById('radio-air-horn');
let radioCarHorn = document.getElementById('radio-car-horn');
let radioPartyHorn = document.getElementById('radio-party-horn');

let hornSound = document.getElementById('horn-sound');
let soundImage = document.getElementById('sound-image');

let honkBtn = document.getElementById('honk-btn');
let partyHornForm = document.getElementById('party-horn-form');

function changeVolumeIcon(whatChanged) {
    console.log(volumeNumber.value);
    console.log(volumeSlider.value);
    if (whatChanged === "number changed") {
        volumeSlider.value = volumeNumber.value;
    }
    else if (whatChanged === "slider changed") {
        volumeNumber.value = volumeSlider.value;
    }

    hornSound.volume = volumeNumber.value / 100.0;

    if (volumeNumber.value > 66){
        volumeImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (volumeNumber.value > 33){
        volumeImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (volumeNumber.value > 0) {
        volumeImage.src = "./assets/media/icons/volume-level-1.svg";
        honkBtn.disabled = false;
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
        honkBtn.disabled = true;
    }
}
volumeNumber.oninput = () => {
    changeVolumeIcon("number changed");
}

volumeSlider.addEventListener("change", () => {
    changeVolumeIcon("slider changed");
})

radioCarHorn.addEventListener("change", () => {
    hornSound.src = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg";
});

radioAirHorn.addEventListener("change", () => {
    hornSound.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg";
});

radioPartyHorn.addEventListener("change", () => {
    hornSound.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
});

partyHornForm.addEventListener("submit", (e) => {
    e.preventDefault();
    hornSound.play();
});
 