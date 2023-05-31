import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const GratitudePage = () => {
  const [affirmation, setAffirmation] = useState('');
  const [gratitude, setGratitude] = useState('');
  const [affirmationsList, setAffirmationsList] = useState([]);
  const [gratitudesList, setGratitudesList] = useState([]);

  const handleAffirmationChange = (e) => {
    setAffirmation(e.target.value);
  };

  const handleGratitudeChange = (e) => {
    setGratitude(e.target.value);
  };

  const handleAddAffirmation = () => {
    setAffirmationsList([...affirmationsList, affirmation]);
    setAffirmation('');
  };

  const handleAddGratitude = () => {
    setGratitudesList([...gratitudesList, gratitude]);
    setGratitude('');
  };

  const handleDeleteAffirmation = (index) => {
    const updatedAffirmations = [...affirmationsList];
    updatedAffirmations.splice(index, 1);
    setAffirmationsList(updatedAffirmations);
  };

  const handleDeleteGratitude = (index) => {
    const updatedGratitudes = [...gratitudesList];
    updatedGratitudes.splice(index, 1);
    setGratitudesList(updatedGratitudes);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Affirmations</h1>
        <input type="text" value={affirmation} onChange={handleAffirmationChange} />
        <button onClick={handleAddAffirmation}>Add Affirmation</button>

        <ul>
          {affirmationsList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDeleteAffirmation(index)}>Delete</button>
            </li>
          ))}
        </ul>

        <h1>Gratitudes</h1>
        <input type="text" value={gratitude} onChange={handleGratitudeChange} />
        <button onClick={handleAddGratitude}>Add Gratitude</button>

        <ul>
          {gratitudesList.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDeleteGratitude(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default GratitudePage;
