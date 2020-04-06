// Array.reverse()
const myArray01 = [0, 1, 2, 3, 4]
console.log('initial array: ', myArray01);

const reverseArray = myArray01.reverse()
console.log('reverse array: ', reverseArray);

// Spread Operator (copy array)
const myArray02 = [0, 1, 2, 3, 4]
const newArrayWrongWay = myArray02
newArrayWrongWay.push(5)

console.log('newArrayWrongWay: ', newArrayWrongWay);
console.log('myArray: ', myArray02);

const newArrayRightWay = [...myArray02, 5]

console.log('newArrayRightWay: ', newArrayRightWay);
console.log('myArray02: ', myArray02);
