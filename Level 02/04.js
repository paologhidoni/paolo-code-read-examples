function transform(arg1) {
  
  let result = [];

  arg1.forEach((x, y) => {
    result = result.concat(y);
  }) 

  return result;
}
































// danger zone *****








console.log(transform(['a', 'b', 'c', 'd']));






















































// Can you think of another way to achieve the same result? For Loop

// function transform(arg1) {
//   let result = [];
//   for (let i = 0; i < arg1.length; i++) {
//     result.push(i);
//   }
//   return result;
// }











// Using map

// function transform(arg1) {
//   return arg1.map((x, y) => y);
// }














// Using reduce


// function transform(arg1) {
//   return arg1.reduce((x, y, z) => {
//     return x.concat(z);
//   }, [])
// }
