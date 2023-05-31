import React from 'react';
import Header from '../pages/components/Header'
import SelfCareList from '../pages/components/SelfCareList';
import EncouragingQuotes from './components/EncouragingQuotes';
import CalmSounds from './components/Calmsounds';
import Footer from './components/Footer';

function Home() {
  const selfCareItems = [
    { id: 1, title: 'Take a bubble bath', category: 'Relaxation' },
    { id: 2, title: 'Practice meditation', category: 'Mindfulness' },
    { id: 3, title: 'Go for a walk in nature', category: 'Exercise' },
    { id: 4, title: 'Read a book', category: 'Personal Growth' },
    { id: 5, title: 'Listen to calming music', category: 'Relaxation' },
  ];

  return (
    <>
        <Header />
        <EncouragingQuotes />
        <SelfCareList selfCareItems={selfCareItems} />
        <CalmSounds />
        <Footer/>
    </>
  );
}

export default Home;
