import { useState } from 'react';

const useCounter = (values) => {
  const [counter, setCounter] = useState(values)
  const increment = (number) => {
    setCounter(counter + number)
  }
  return [counter, setCounter, increment]
}
export default useCounter