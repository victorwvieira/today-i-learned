## React - Hooks
### [useEffect](https://reactjs.org/docs/hooks-effect.html)

###### Examples

* ##### Called after first render and when change the state of variable *count*.
```
  useEffect(() => {    
    document.title = title;
  }, [ count ]);
```

* ##### Called after first render and when change the state of variable *title*.
```
  useEffect(() => {    
    document.title = title;
  }, [ title ]);
```

* ##### Called only once, after render the component.
```
  useEffect(() => {    
    document.title = 'Call just Once';
  }, []);
```

* ##### Called always, after first render and after update the state of the component.
```
  useEffect(() => {    
    document.title = 'Call every update';
  });
```
