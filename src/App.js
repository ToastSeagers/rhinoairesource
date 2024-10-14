import React from 'react';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import UsefulLinks from './components/UsefulLinks';
import TipsSection from './components/TipsSection';
import PracticalExamples from './components/PracticalExamples';
import FurtherReading from './components/FurtherReading';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
        <UsefulLinks />
        <TipsSection />
        <PracticalExamples />
        <FurtherReading />
      </main>
    </div>
  );
}

export default App;