function transform(arg1) {
  
  let result = [];

  arg1.forEach((x, y) => {
    result = result.concat(y);
  }) 

  return result;
}
































// danger zone *****








console.log(transform(['a', 'b', 'c', 'd']));