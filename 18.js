const transform = (arg1) => arg1.length > 5 ?`${arg1.slice(0, 2)} ${arg1.slice(2)}`:
arg1;
































// danger zone *****





console.log(transform('hohoooo!'))
console.log(transform('Santa'));
console.log(transform('ishere!'))
console.log(transform('ornot???'))