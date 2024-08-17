// Seleciona os elementos do DOM
const audio = new Audio();
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const trackName = document.getElementById('track-name');
const volumeSlider = document.getElementById('volume-slider');

// Lista das faixas
const tracks = [
    'http://radio.stereoscenic.com/ama-h',
    'http://radio.stereoscenic.com/ama-s',
    'http://163.172.169.217:80/asp-h',
    'http://radio.stereoscenic.com:80/am-h.mp3',
    'http://163.172.169.217:80/asp-s',
    'http://radio.stereoscenic.com:80/am-s.mp3',
    'http://163.172.169.217:80/asp-l',
    'http://radio.stereoscenic.com:80/am-l.mp3',
];

let currentTrackIndex = 0;

// Função para reproduzir a faixa
function playTrack(index) {
    audio.src = tracks[index];
    audio.play().then(() => {
        trackName.textContent = `Playing ${index + 1}`;
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    }).catch((error) => {
        console.error('Erro ao reproduzir a faixa:', error);
    });
}

// Função para pausar a faixa
function pauseTrack() {
    audio.pause();
    trackName.textContent = 'Pausado';
    playButton.classList.remove('fa-pause');
    playButton.classList.add('fa-play');
}

// Manipuladores de eventos
playButton.addEventListener('click', () => {
    if (audio.paused) {
        playTrack(currentTrackIndex);
    } else {
        pauseTrack();
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(currentTrackIndex);
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(currentTrackIndex);
});

// Controle de volume
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
});

// Dialog
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const dialog = document.getElementById('download-dialog');
        dialog.classList.add('show');

        // Role suavemente para o modal
        setTimeout(() => {
            dialog.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 0); // Tempo para garantir que o modal já tenha começado a aparecer
    }, 3000); // Tempo antes do modal aparecer
});

function toggleMacSection() {
    const macSection = document.getElementById('mac-section');
    const expandButton = document.getElementById('expand-button');

    if (macSection.style.display === 'none') {
        macSection.style.display = 'block';
        expandButton.textContent = 'Mostrar menos';
    } else {
        macSection.style.display = 'none';
        expandButton.textContent = 'Mostrar mais';
    }
}
