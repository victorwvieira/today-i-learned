import React, { useState, useEffect } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('TIL - useEffect')

  useEffect(() => {
    console.log('1');
    document.title = title;
  }, [ count ]);

  useEffect(() => {    
    console.log('2');
    document.title = title;
  }, [ title ]);

  useEffect(() => {    
    console.log('3');
    document.title = 'Call just Once';
  }, []);

  useEffect(() => {    
    console.log('4');
    document.title = 'Call every update';
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count Button</button>
      <button onClick={() => setTitle(`You clicked ${count} times`)}>Change Title</button>
    </div>
  );
}

export default App;
