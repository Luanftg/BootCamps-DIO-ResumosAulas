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

var propName = 'teste';

var obj = {
    [propName + 'concat']: 'prop value'
};

console.log(obj);