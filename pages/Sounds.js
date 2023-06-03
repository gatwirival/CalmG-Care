import React, { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

const CalmSounds = () => {
  const [sounds, setSounds] = useState([
    { id: 1, name: 'Calm River', source: '/sounds/calm-river.mp3' },
    { id: 2, name: 'Forest', source: '/sounds/forest.mp3' },
    { id: 3, name: 'Bird Chirping', source: '/sounds/evening-birds.mp3' },
    { id: 4, name: 'Light Rain', source: '/sounds/light-rain.mp3' },
    { id: 5, name: 'Minor Arp', source: '/sounds/minor-arp.mp3' },
    { id: 6, name: 'Relaxing', source: '/sounds/relaxing.mp3' },
    { id: 7, name: 'Soft-rain', source: '/sounds/soft-rain.mp3' },
    { id: 8, name: 'Super Spacy', source: '/sounds/superspacy.mp3' },
    { id: 9, name: 'Piano', source: '/sounds/the-last-piano.mp3' },
    { id: 10, name: 'Uplifting', source: '/sounds/uplifting-pad.mp3' },
    { id: 11, name: 'Wind Chimes', source: '/sounds/wind-chimes.mp3' },
    { id: 12, name: 'Chicken Sounds', source: '/sounds/chicken-sounds.mp3' },

  ]);

  const handlePlaySound = (id) => {
    const updatedSounds = sounds.map((sound) =>
      sound.id === id ? { ...sound, playing: true } : { ...sound, playing: false }
    );
    setSounds(updatedSounds);
  };

  return (
    <div>
      <Header />
      {sounds.map((sound) => (
        <div key={sound.id} className={`sound ${sound.playing ? 'playing' : ''}`}>
          <div className="sound-name">{sound.name}</div>
          <audio src={sound.source} controls={sound.playing} autoPlay={sound.playing} loop />
          <button onClick={() => handlePlaySound(sound.id)}>Play</button>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default CalmSounds;