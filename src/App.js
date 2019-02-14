import React from 'react';
import './App.css';
import { AreaChart } from 'react-chartkick';

function App() {
  return (
    <div className="App">
      <h1>React Migration Progress</h1>
      <div className="migration-status">
        <AreaChart
          data={{
            [new Date('2/13/2019')]: 11,
          }}
          suffix="%"
          max={100}
          min={0}
        />
      </div>
    </div>
  );
}

export default App;
