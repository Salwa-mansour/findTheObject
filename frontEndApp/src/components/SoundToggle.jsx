import { useState } from 'react';
import { getSoundMuted, toggleSoundMute } from '../utils/sound.js';

function SoundToggle() {
    const [muted, setMuted] = useState(getSoundMuted());

    const handleToggle = () => {
        const newState = toggleSoundMute();
        setMuted(newState);
    };

    return (
        <button 
            onClick={handleToggle}
            className="sound-toggle-btn"
            title={muted ? "Unmute Sound" : "Mute Sound"}
            style={{ 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '1.4rem',
                padding: '0.5rem'
            }}
        >
            {muted ? '🔇' : '🔊'}
        </button>
    );
}

export default SoundToggle;