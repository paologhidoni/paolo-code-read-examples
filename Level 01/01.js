function transform(arg1) {
  let result = ''
  for (let x = 0; x < arg1.length; x++) {
    result += arg1[x];
  }
  result = arg1.toUpperCase();
  return result;
}
































// danger zone *****






console.log(transform('Ufos exist!'));