import React from 'react';
import Title from './components/Title'
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div>
      <Title content="Hello World!"/>
      <main>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
