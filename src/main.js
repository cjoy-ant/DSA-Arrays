const Array = require('./array')
const URLifyString = require('./URLifyString')

const  main = () => {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr.get(0));
  arr.empty();
  arr.pop();
  console.log(arr.length);
  arr.push("tauhida");
  console.log(arr.get(0));
  // "Nan" -- not a number, it is a string
  // in Memory, using Float64Array, values are stored as numbers
  console.log(URLifyString("www.helloworld.com/ hello world"))
  console.log(Filter([1,2,3,4,5,6,7,8,9,10], 5))
}

module.exports = main