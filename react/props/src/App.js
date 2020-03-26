import React from 'react';
import Top from './components/top'
import Bottom from './components/bottom'

function App() {
  const propsWithoutDestructuring = "Jesus is alive!"
  const propsWithDestructuring = "Jesus is alive!"
  
  return (
    <div>
      <Top anyText={propsWithoutDestructuring}></Top>
      <Bottom anyText={propsWithDestructuring}></Bottom>
    </div>
  );
}

export default App;
