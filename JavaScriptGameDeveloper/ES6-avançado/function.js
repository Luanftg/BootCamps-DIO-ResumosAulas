/*function log(value) {
    console.log(value);
};

log('teste');

var sum = function(a, b) {
    return a + b;
};
console.log(sum(5, 5));

var sumNew = (a, b) => a + b;
console.log(sumNew(4, 4)); */

/*Default
ECMASCRIPT 6 
*/

/* lazy evaluation*/
/*
function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    /*
     b = b || 1;           /* TESTE LÓGICO! "SE EXISTIR B (B == TRUE) OU B == 1" */
/*
    b = typeof b === 'undefined' ? 1 : b; */
/*    if (typeof b=== 'undefined') {
            b=1;
        }

    return a * b;
}

console.log(multiply(5));
*/

// Object Literals

//var prop1 = 'Digital Innovation';
/*
function method1() {
    console.log('method called');
}
var obj = {
    method1
};

obj.method1();*/
/*
var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));*/
/*
var propName = 'teste';

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);*/

//rest operator ...
/*
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];

    }
    return value;
}
console.log(sum(5, 5, 5, 2, 3));*/
/*
function sum(...args) {
    return args.reduce((acc,value)=>acc+value,0);
}
console.log(sum(5, 5, 5, 2, 3));*/

//rest operator...
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sum(5, 5, 5, 2, 3));
*/

// spread operator...
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));
*/
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);
//logArgs(...arr);
*/

const obj = {
    test: 123
};

const obj2 = {
    ...obj
};


obj2.test = 456;
console.log(obj);