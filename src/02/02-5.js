//ES6 화살표 함수 =>
/*var add = (first,second) => {
    return first + second;
};
*/
var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({add: first + second, multiple: first * second});

console.log(add(4,5));
console.log(addAndMultiple(4,5).multiple);

class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function(first, second) {
            return this.value + first + second;
        }.bind(this);

        var addThis3 = (first,second) => this.value + first + second;
    }
}

var f = new MyClass();

console.log(typeof f.addThis3);


var randomKeyString = 'other';
var combined = {
    ['one' + randomKeyString]: 'some value',
};

console.log(combined.oneother);