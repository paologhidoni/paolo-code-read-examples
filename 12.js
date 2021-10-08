function transform(arg1) {
  let result = arg1.split('').map((el, index) =>  arg1.charCodeAt(index));

  return String.fromCharCode(...result);
}
































// danger zone *****




console.log(transform('Had you known you before you wouldn\'t have wasted your time!'));