var a = 0;
var b = 1;
var sum = 0;

function p2(number) {
  for (i = 1; i < number; i = a + b) {
    if (i % 2 === 0) {
      sum += i;
    };
    a = b;
    b = i;
  };
  return sum;
};

console.log(p2(4000000));
