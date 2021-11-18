function transform(...arg) {
  let result1 = arg.flat(Infinity);
  let result2 = result1.reduce((acc, el) => acc + el);
  let result3 = result2 / result1.length;
  return result3;
}








































// ***** DANGER ZONE ********** //



















console.log(transform([5, 5], [6, 15], [[3, 3, 3], 8]));


