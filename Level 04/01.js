function transform(arg1) {
  return arg1.sort((x, y) => {

    if (x < y) {
      return 1;
    } else if (x > y) {
      return -1;
    } else {
      return 0;
    }
  
  })
}


































// danger zone *****





console.log(transform(['a', 'b', 'c', 'd']));
console.log(transform([1, 2, 3, 4]));


















