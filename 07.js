function transform(arg1) {
  return arg1.length < 10 ? arg1.padEnd(10, '*') : arg1.substring(0, 10)
}
































// danger zone *****




console.log(transform('Hi'));
console.log(transform('Am I right? Am I not?'));
console.log(transform('0056780761000000000000000'));
console.log(transform('87897'));
