function transform(arg1) {

  return arg1[arg1.length - 1] + 
         arg1.slice(1, arg1.length - 1) +
         arg1[0];

}
































// danger zone *****







console.log(transform('Hello'));
console.log(transform(['Hey', 'you', '!']));
console.log(transform([1, 2, 3]), typeof transform([1, 2, 3]));


























































// On what kind of values will this work?

// Arrays - returns an array with the extracted elements
// Strings - returns a substring







// Can you think of another method to achieve this only if the value is a string, not an array?

// function transform(arg1) {

//   return arg1[arg1.length - 1] + 
//          arg1.substring(1, arg1.length - 1) +
//          arg1[0];
// }








// Is there another way you can get a string joining all the operations we are doing, without using the + sign?


// function transform(arg1) {

//   return `${arg1[arg1.length - 1]}${arg1.slice(1, arg1.length - 1)}${arg1[0]}`;
  
// }









// What would happen if the values were numbers?


//01// If all values being added using the + operator are numbers, they get added and return a number.

// console.log(1 + 3 + 6, typeof (1 + 3 + 6)); 

// 10 number



//02// If there is an array in the calculation the end result is a string.

// console.log(1 + [3] + 6, typeof (1 + [3] + 6)); 

// 136 string



