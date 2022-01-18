var array1 = ['one','two'];
var array2 = ['three', 'four'];
const combined = [...array1, ...array2];
console.log(combined);
const [first, second, three = 'empty', ...others] = array1;
console.log(first);
console.log(second);
console.log(three);
console.log(others);
console.log(array1);
function func(...args) {var [first,...others] = args;};

console.log(func());