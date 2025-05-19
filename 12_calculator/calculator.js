const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(a) {
if (a.length == 0) {return 0} else {
return a.reduce((product, current) => product + current)}
};

const multiply = function(a) {
return a.reduce((product, current) => product * current)
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  let i = 1;
  for (let j=a; j>0; j--) {
    i*=j;
  }
  return i;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
