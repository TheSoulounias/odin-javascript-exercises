const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(a) {
	a.reduce((previous, current) => {
	 return previous + current;
	}, initial)
  return initial
};

const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
	let i = 0
  let j = 0
  let k = 0
  while (a < 0) {
    j = a;
    a--;
    k = j*a;
    i+=k;
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
