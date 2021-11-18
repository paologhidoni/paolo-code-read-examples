function transform(arg1) {
  return arg1.reduce((x, y) => {
    if(x.indexOf(y) === -1) {
      x = x.concat(y);
    }
    return x;
  }, []);
}
































// danger zone *****



console.log(transform([1, 6, 5, 3, 7, 9, 2, 10, 1, 1, 1, 4]));
// console.log(transform(['a', 'd', 'd', 'f', 'a', 'c', 'e', 'f', 'b']));
// console.log(transform(['a', 3, 'd', 6, 6, 'a', 8, 8, 'e', 'f', 'b']));


























