var i = 2;
var number = 600851475143;
var target = number;

while (i < target) {
    if(target % i === 0) {
        target = target / i;
    }
    i++;
}
console.log(target);
