// src/utils/sound.js
// const hitSound = new Audio('/sounds/hit_sound.wav');
const hitSound = new Audio('https://res.cloudinary.com/du6d1qifw/video/upload/v1791641388/hit_sound-compressed_uz9uib.mp3');
// const winSound = new Audio('/sounds/win_sound.wav');
const winSound = new Audio('https://res.cloudinary.com/du6d1qifw/video/upload/v1791641388/win_sound-compressed_skvbzq.mp3');

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