// src/utils/sound.js
const hitSound = new Audio('/sounds/hit_sound.wav');
const winSound = new Audio('/sounds/win_sound.wav');

// Load initial mute state from localStorage (default to false/unmuted)
let isMuted = localStorage.getItem('game_sound_muted') === 'true';

export function getSoundMuted() {
    return isMuted;
}

export function toggleSoundMute() {
    isMuted = !isMuted;
    localStorage.setItem('game_sound_muted', isMuted);
    return isMuted;
}

export function playHitSound() {
    if (isMuted) return; // Skip if muted
    hitSound.currentTime = 0;
    hitSound.play().catch(err => console.log("Audio play blocked:", err));
}

export function playWinSound() {
    if (isMuted) return; // Skip if muted
    winSound.currentTime = 0;
    winSound.play().catch(err => console.log("Audio play blocked:", err));
}