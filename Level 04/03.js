function transform(arg1) {
  return arg1.reduce((x, y) => {
    if(x.indexOf(y) === -1) {
      x = x.concat(y);
    }
    return x;
  }, []);
}
































// danger zone *****



console.log(transform([1, 6, 5, 3, 7, 9, 2, 10, 1, 1, 1, 4]));
console.log(transform(['a', 'd', 'd', 'f', 'a', 'c', 'e', 'f', 'b']));
console.log(transform(['a', 3, 'd', 6, 6, 'a', 8, 8, 'e', 'f', 'b']));






































// ********** EXPLANATION ********* //

/*
The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/


// This transform function removes duplicates, it can be replicated in a few ways:

  //01// Using JavaScript ES6 Sets

  // function transform(arg1) {
  //   let result = new Set(arg1);
  //   return Array.from(result);
  // }


  //02// Using forEach and indexOf()

  // function transform(arg1) {
  //   let result = [];

  //   arg1.forEach(x => result.indexOf(x) === -1 && result.push(x));

  //   return result;
  // }
