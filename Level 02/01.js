function transform(arg) {

  let result = [];

  for (let i = 0; i < arg.length; i++) {
    arg[i] % 2 === 0 && result.push(arg[i]);
  }

  return result;

}
































// danger zone *****








console.log(transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));





















































// We are using the logical && (and) operator to execute code in the second operand if the first one is true. (short circuiting)

// If we were to remove the && operator is there another way to only keep the even numbers (without using different methods, just modifying the for loop)?


// Using a modified for loop

// function transform(arg) {

//   let result = [];

//   for (let i = 1; i < arg.length; i+=2) {
//     result.push(arg[i]);
//   }

//   return result;

// }








/* Can you think of other ways to keep only the even numbers? */


// Using filter()

// function transform(arg) {
//   return arg.filter(x => x % 2 === 0);
// }









// Using reduce

// function transform(arg) {

//   return arg.reduce((x, y) => {
//     if(y % 2 === 0) {
//      x = x.concat(y);
//     }
//     return x;
//   }, []);

// }