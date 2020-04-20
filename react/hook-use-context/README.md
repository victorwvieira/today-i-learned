## React - Hooks

### useContext

###### Examples

- ##### Created a context component that will be the provider for others component.

```
import React from 'react'

const ThemeContext = React.createContext('theme blue')

export default ThemeContext
```

- ##### Import the context component and use it as provider to encapsulate all components that will have data access through the context.

```
  return (
    <ThemeContext.Provider value={themeColor}>
      <HomePage>
        <button onClick={changeThemeColorClick}>Change theme color</button>
      </HomePage>
    </ThemeContext.Provider>
  );
```

- ##### Inside of a component, import the context component and with the hook useContext access the context value.

```
import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

const HomePage = () => {
    const themeColor = useContext(ThemeContext)

```