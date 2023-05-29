import React, { useState } from 'react';
import Link from 'next/link';

const CalmSounds = () => {
  const [sounds, setSounds] = useState([
    { id: 1, name: 'FirePlace', source: '/sounds/fireplace.mp3' },
    { id: 2, name: 'Crickets', source: '/sounds/crickets.mp3' },
    { id: 3, name: 'Bird Chirping', source: '/sounds/junglebirds.mp3' },
  ]);

  const handlePlaySound = (id) => {
    const updatedSounds = sounds.map((sound) => {
      if (sound.id === id) {
        return { ...sound, playing: true };
      } else {
        return { ...sound, playing: false };
      }
    });
    setSounds(updatedSounds);
  };

  const handleStopSound = () => {
    const updatedSounds = sounds.map((sound) => ({
      ...sound,
      playing: false,
    }));
    setSounds(updatedSounds);
  };

  return (
    <div style={{ position: 'fixed', top: '15%', right: '5%' }}>
      <div className="sounds-container">
        {sounds.map((sound) => (
          <div
            key={sound.id}
            className={`sound ${sound.playing ? 'playing' : ''}`}
          >
            <div className="sound-name">{sound.name}</div>
            <audio
              src={sound.source}
              controls={sound.playing}
              autoPlay={sound.playing}
              loop
            />
            <button onClick={() => handlePlaySound(sound.id)}>Play</button>
          </div>
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handleStopSound}>Stop All Sounds</button>
        <Link href="/Sounds">
          <button>Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default CalmSounds;
