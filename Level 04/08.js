function transform(arg1, arg2) {
  let result = new Map();
  result = result.set(arg1, arg2);
  return result.get(arg1);
}
































// danger zone *****




console.log(transform('a', 255));