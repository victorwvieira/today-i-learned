## React - Hooks
### [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

###### Examples

* ##### Define a initial state to the component.
```
const initialState = { day: 17, month: 4, year: 2020 }
```

* ##### Develop the reducer function that will receive a state and an action. Checking the type of the action to switch according the value. In the example below I use spread operator to update only one property inside the object.
```
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
```

* ##### The hook useReducer will receive a function (reducer) as first parameter and the initial value as second parameter.
```
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

```

* ##### To call the values use the variable *state* as object. The function dispatch() receive a object with property *type* that value is used inside the reducer to switch the fucntions. When use the function dispatch a action will start.
```
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
```


* ##### If necessary it is possible to use the hook useEffect to know when a state is change.
```
  useEffect(() => {
    console.log('change state')
  }, [state])
```

