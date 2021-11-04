function transform(arg1, arg2) {
  return arg1.test(arg2);
}




























// danger zone *****









console.log(transform(/\d+/g, 'Hello'));
console.log(transform(/\w+/g, 'Hello'));
console.log(transform(/e/g, 'Hello'));
console.log(transform(/[lo]/g, 'Hello'));
console.log(transform(/z/g, 'Hello'));