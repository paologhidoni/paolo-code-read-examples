function transform(arg1) {
  return arg1.filter(function(el) {
    return el !== 1;
  });
}
































// danger zone *****



console.log(transform([1, 5, 3, 7, 9, 10, 1, 1, 1, 4]));