function transform(arg1) {

  return arg1[arg1.length - 1] + 
         arg1.slice(1, arg1.length - 1) +
         arg1[0];

}
































// danger zone *****







console.log(transform('Hello'));
// console.log(transform(['Hey', 'you', '!']));
// console.log(transform([1, 2, 3]), typeof transform([1, 2, 3]));
























