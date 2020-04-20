import React, { useState } from 'react';
import ThemeContext from './ThemeContext'
import HomePage from './HomePage'

function App() {
  const [themeColor, setThemeColor] = useState('theme red')
  const changeThemeColorClick = () => {
    if (themeColor === 'theme red') {
      setThemeColor('theme blue')
    } else {
      setThemeColor('theme red')
    }
  }
  return (
    <ThemeContext.Provider value={themeColor}>
      <HomePage>
        <button onClick={changeThemeColorClick}>Change theme color</button>
      </HomePage>
    </ThemeContext.Provider>
  );
}

export default App;
