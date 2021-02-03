## React - Hooks
### [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

###### Explanation

* ##### Create a REFerence to an element in the DOM
```
const inputRef = useRef();

function changeFocus() {
console.log(inputRef.current);
inputRef.current.focus();
}

<input
ref={inputRef}
value={name}
onChange={(e) => setName(e.target.value)}
/>

```

* ##### Change the value of an element without re-render like useState.
```
const countRender = useRef(0);

useEffect(()=>{
 //Not pass here
},[])

```