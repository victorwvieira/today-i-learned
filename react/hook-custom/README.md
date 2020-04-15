## React - Hooks
### Custom Hook

###### Examples

* ##### Developed a custom hook as a function and saved in other file. This hook create new states with the initial state equal to the value that received. Is it possible to develop functions inside of the hook. Look that the hook returns the new state with the "setValue" (setCounter) and also the function developed inside the hook.
```
import { useState } from 'react';

const useCounter = (values) => {
  const [counter, setCounter] = useState(values)
  const increment = (number) => {
    setCounter(counter + number)
  }
  return [counter, setCounter, increment]
}
export default useCounter
```

* ##### In the component code It's possible to import the new hook, calling as other hook.
```
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
```
