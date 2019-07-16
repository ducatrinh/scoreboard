import React from 'react';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div>
      <Title content="Scoreboard App"/>
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
