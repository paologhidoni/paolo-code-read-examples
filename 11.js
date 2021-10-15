function transform(arg1) {
  const {a, b, c='Hello hello', ...others} = arg1;
  return c;
}
































// danger zone *****


console.log(transform(
  {
    a: 'String one',
    b: 'String two',
    c: 'String three',
    d: 'String four',
    e: 'String five'
  }
));