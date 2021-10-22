function transform(arg1) {
  let result = arg1.split('').map((x, y) =>  arg1.charCodeAt(y));
  return String.fromCharCode(...result);
}
































// danger zone *****




console.log(transform('Had you known you before you wouldn\'t have wasted your time!'));