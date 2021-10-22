function transform(arg1) {
  return arg1.sort((x, y) => {

    if (x < y) {
      return 1;
    } else if (x > y) {
      return -1;
    } else {
      return 0;
    }
  
  })
}


































// danger zone *****





console.log(transform(['a', 'b', 'c', 'd']));
console.log(transform([1, 2, 3, 4]));





































// ********** EXPLANATION ********* //

// The sort() method returns a sorted array and mutates the original array. It can receive an optional compareFunction;

    /* If no compareFunction is provided, sort converts all array elements to strings and sorts them comparing them one to another following UTF-16 code units order. For example 'dog' comes before 'monkey'. 
    In a numeric sort, since numbers are converted to strings, '50' comes before '8', (because they are sorted following the Unicode order).
    All the undefined elements are sorted to the end of the array. */

    /* If a compareFunction is provided, it has two parameters:

      // The first parameter is the first element for comparison (a)
      // The second parameter is the second element for comparison (b)

      All elements are sorted according to the return value of the compare function;
      If compareFunction(a, b) returns

      > 0     sort b before a
      < 0     sort a before b
      ===0    keep original order of a and b

      All undefined elements are sorted to the end of the array.

    */



// This Transform function uses sort() to mimic reverse() and can 
// be replicated in a few ways:


  //01// using reverse()

  // function transform(arg1) {
  //   return arg1.reverse();
  // }


  //02// using a reverse for loop

  // function transform(arg1) {
  //   let result = [];
  //   for (let x = arg1.length - 1; x >= 0; x--) {
  //     result.push(arg1[x]);
  //   }
  //   return result;
  // }


  //03// using a reverse while loop

  // function transform(arg1) {
  //   let result = [];
  //   let x = arg1.length - 1;

  //   while (x >= 0) {
  //     result.push(arg1[x]);
  //     x--;
  //   }

  //   return result;
  // }


  //04// using an arrow function - ONLY WORKS WITH NUMEBERS, NOT STRINGS.

  // function transform(arg1) {
  //   return arg1.sort((x, y) => y - x);
  // }


  //05// Using the same logic but with the ternary operator
  // function transform(arg1) {
  //   return arg1.sort((x, y) => {
  //     return x < y ? 1 : x > y ? -1 : 0;
  //   })
  // }


  