function transform(arg1) {
  arg1.splice(2, 1, 'Hey');
  return arg1;
}
































// danger zone *****






console.log(transform([1, 2, 3, 4, 5]));