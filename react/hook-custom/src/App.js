import React from 'react';
import useCounter from './useCounter'

function App() {
  const [number, setNumber, plusNumber] = useCounter(0)
  return (
    <div >
    <h3>{number}</h3>
    <button onClick={() => {plusNumber(2)}}>Plus X</button>
    <button onClick={() => {setNumber(10)}}>Set 10</button>
    </div>
  );
}

export default App;
