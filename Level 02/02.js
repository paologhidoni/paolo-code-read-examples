const transform = (arg1, arg2) => arg2(arg1);
































// danger zone *****





console.log(transform(2, function(x){return x < 10}));
console.log(transform(2, function(x){return x > 10}));
console.log(transform(2, function(x){return typeof x}));
