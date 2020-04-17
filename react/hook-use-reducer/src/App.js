import React, { useReducer, useEffect } from 'react';

const initialState = { day: 17, month: 4, year: 2020 }
const reducer = (state, action) => {
  switch (action.type) {
    case 'DAY':
      return { ...state, day: state.day + 1 }
    case 'MONTH':
      return { ...state, month: state.month + 1 }
    case 'YEAR':
      return { ...state, year: state.year + 1 }
    default:
      break;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log('change state')
  }, [state])

  return (
    <div>
      DATE: {state.day}/{state.month}/{state.year}
      <div>
        <button onClick={() => dispatch({ type: 'DAY' })}>DAY</button>
        <button onClick={() => dispatch({ type: 'MONTH' })}>MONTH</button>
        <button onClick={() => dispatch({ type: 'YEAR' })}>YEAR</button>
      </div>
    </div>
  );
}

export default App;
