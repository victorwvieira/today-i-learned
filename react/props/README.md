## React - Props

### [destructuring props](https://reactjs.org/docs/hooks-effect.html)

###### Examples

##### Component receving a props.

```
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
```

- ##### Using props without destructuring.

```
function Top(props) {
  return (
    <div>
      {props.anyText}
    </div>
  );
}
```

- ##### Using props with destructuring.

```
function Bottom({ anyText }) {
  return (
    <div>
      {anyText}
    </div>
  );
}
```
