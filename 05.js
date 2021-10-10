function transform(arg1) {
  if(typeof arg1 === 'boolean') {
    return !arg1;
  } else {
    return 'If it\'s not a Boolean I don\'t care.';
  }
}
































// danger zone *****




console.log(transform(true));
console.log(transform('Do you care?'));