function transform(arg1, arg2) {
  return arg2.test(arg1);
}




























// danger zone *****









console.log(transform('Hello', /\d+/g));
console.log(transform('Hello', /\w+/g));
console.log(transform('Hello', /e/g));
console.log(transform('Hello', /[lo]/g));
console.log(transform('Hello', /z/g));