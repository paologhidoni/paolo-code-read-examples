function transform(arg1, arg2) {
  let result = [arg1, arg2];
  return result.flat(1);
}




























// danger zone *****








console.log(transform([1, 2], [3, 4, 5, 6]));
console.log(transform([1, 2, [3, 4]], [5, 6]));