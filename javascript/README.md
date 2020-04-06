## JavaScript - Array
### [array.reverse()](https://github.com/waisbek/today-i-learned/blob/feature/javascript/javascript/array.js)

###### Examples

* ##### Create a variable that receive an array of numbers and use console.log() to show the content. Create another variable that receive the first variable changing the order os the numbers using the method reverse().
```
const myArray = [0, 1, 2, 3, 4]
console.log('initial array: ', myArray);

const reverseArray = myArray.reverse()
console.log('reverse array: ', reverseArray);
```

### [Spread Operator](https://github.com/waisbek/today-i-learned/blob/feature/javascript/javascript/array.js)

###### Examples

* ##### Te correct way to copy an array (including a new value or not) is using Spread Operator [...arrayVariable]
```
const newArrayRightWay = [...myArray02, 5]
```