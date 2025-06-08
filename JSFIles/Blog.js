var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

const audio = document.getElementById("player");
const btn = document.getElementById("bgm-btn");

window.onload = function () {
    audio.volume = 0.1;

    // Set tampilan awal tombol berdasarkan status audio
    btn.innerHTML = audio.paused
        ? '<i class="fa fa-play"></i>'
        : '<i class="fa fa-pause"></i>';
};

// Fungsi toggle play/pause ketika tombol ditekan
function pauseAudio() {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fa fa-play"></i>';
    }
}

// Autoplay saat interaksi pertama kali (klik/scroll)
let hasInteracted = false;

function enableAudioOnFirstInteraction() {
    if (!hasInteracted) {
        audio.play().then(() => {
            btn.innerHTML = '<i class="fa fa-pause"></i>';
        }).catch((err) => {
            console.warn("Autoplay diblokir oleh browser:", err);
        });
        hasInteracted = true;
    }
}

document.addEventListener("click", enableAudioOnFirstInteraction);
document.addEventListener("scroll", enableAudioOnFirstInteraction);
