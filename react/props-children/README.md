## React - Props

### children
<br/>

###### Examples

##### Create a new component that receive data as children.

```
  return (
      <TextComponent>
        <TextComponentItem>Header</TextComponentItem>
        <TextComponentItem>Content</TextComponentItem>
        <TextComponentItem>Footer</TextComponentItem>
      </TextComponent>
  );
```

- ##### In the new component using destructuring, take the children values

- ###### Item component.
```
export const TextComponentItem = ({ children }) => {
    return (
        <p>{children}</p>
    )
}
```

- ###### Main component.

```
const TextComponent = ({ children }) => {
    return (
        <div>
            {
                children && children.map((item, index) => {
                    return <div key={index}>{item.props.children}</div>
                })
            }
        </div>
    )
}
```
