const Array = require("./array");
// const URLifyString = require("./URLifyString");
// const Filter = require("./filter");
// const maxSum = require("./maxSum");
// const Merge = require('./merge')
// const removeChar = require("./removeChar");
const Products = require("./products");

const main = () => {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  // arr.push(3);
  // console.log(arr);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  // console.log(arr.get(0));
  // arr.empty();
  // arr.pop();
  // console.log(arr.length);
  // arr.push("tauhida");
  // console.log(arr.get(0));
  // // "Nan" -- not a number, it is a string
  // // in Memory, using Float64Array, values are stored as numbers
  // console.log(URLifyString("www.helloworld.com/ hello world"));
  // console.log(Filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
  // console.log("largest sum: " + maxSum([4, 6, -3, 5, -2, 1]));
  // console.log("merged array: " + Merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))
  // console.log("remove characters: " + removeChar("hello world", "eo"))
  console.log("products: " + Products([1, 3, 9, 4]));
};

module.exports = main;
