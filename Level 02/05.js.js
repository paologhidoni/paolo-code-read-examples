function transform(arg1) {

  arg1.splice(2, 1, 'Hey');
  return arg1;
  
}
































// danger zone *****






console.log(transform([1, 2, 3, 4, 5]));



























































//01 Can you tell me what arguments does the splice() method accept?

  // The starting index at which to start extracting the elements.
  // The number of elements to extract into the array.
  // The number of elements to insert into the array.









//02 What would happen if instead of returning arg1, we were to return the result of calling splice on arg1? What does the splice method return? So like this:

// return arg1.splice(2, 1, 'Hey'); 

// [3] an array containing the element that has been removed from the original array.





 



//03 If we specify an index that is equal or bigger than the array's length? like so:

// function transform(arg1) {
//   arg1.splice(6, 1, 'Hey');
//   return arg1;
// }


 //** */ what would arg1.splice(6, 1, 'Hey') return? 
 
 //[] an empty array



 //** */ What would arg1 return? 
 
 // an array with the element added at the end.













// What would happen if we were to pass a negative index to the slice() method?

// function transform(arg1) {
//   arg1.splice(-2, 1, 'Hey');
//   return arg1;                
// }

// returns [ 1, 2, 3, 'Hey', 5 ]

// It would start extracting starting from the negative index specified from end of the array. (at -2 starting from the end of the array)