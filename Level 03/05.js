function transform(arg1) {
  const [a, b, ...others] = arg1;

  return others;

}
































// danger zone *****



console.log(transform(['Bread', 'Butter', 'Olives', 'Potatoes', 'Carrots']));