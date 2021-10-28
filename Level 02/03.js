function transform(arg1, arg2, arg3) {
  return arg1.indexOf(arg2, arg3);
}




























// danger zone *****










console.log(transform(['portobello','chestnut', 'porcini'], 'porcini'));
console.log(transform(['portobello','chestnut', 'porcini'], 'amanita'));
console.log(transform([1, 2, 3, 4], 2));
console.log(transform([1, 2, 3, 4], 2, 4));
console.log(transform([1, 2, 3, 4], 2, -2));