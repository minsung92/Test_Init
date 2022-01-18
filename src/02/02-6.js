
/*
function Shape(x, y) {
    this.name = 'Shape';
    this.move(x, y);
}

Shape.prototype = {
    move: function(x, y) {
        this.x = x;
        this.y = y;
    },
    area: function() {
        return 0;
    }
}

function Circle(x, y, radius) {
    Shape.call(this,x,y);
    this.name = 'Circle';
    this.radius = radius;
}

Object.assign(Circle.prototype,Shape.prototype, {
    area: function () {
        //return this.x * this.y;
        return this.radius * this.radius;
    }
});

var c = new Circle(2,2,10);
console.log(`${c.area()} || ${c.name}`);
*/

//ES6
class Shape {
    static create(x, y) {return new Shape(x, y);}
    name = 'Shape';
    constructor (x, y) {
        this.move(x,y);
    }
    move(x,y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}

var s = new Shape(0,0);
console.log(s.area());

var c = new Circle(0,0,10);
console.log(c.area());