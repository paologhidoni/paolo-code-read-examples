// function transform(arg1) {
//   let result = arg1.replaceAll(',', ' ');
//   return result;
// }



























// danger zone *****




console.log(transform('How,was,your,day,?'));































// How would you achieve the same result otherwise?


// Using replace() and regex

// function transform(arg1) {
//   let result = arg1.replace(/,/g, ' ');
//   return result;
// }








// Using a for loop

// function transform(arg1) {
//   let result = '';

//   for (let x = 0; x < arg1.length; x++) {
//     if(arg1[x] === ',') {
//       result += ' ';
//     } else {
//       result += arg1[x];
//     }
//   }

//   return result;
// }
