/* Exercise 3.2:Create 3 simple functions where call, bind and apply are used. 
The intention of this exercise isto understand how they work and their differences.*/

function operation(a, b) {
    switch (this.type) {
        case 'sum': { return a + b; }
        case 'difference': { return a - b; }
        case 'product': { return a * b; }
        case 'divide': { return a / b; }
        default: { return "INVALID OPERATION TYPE" }
    }
}

console.log('invoking the Funtion with Default binding (global) : ');

console.log(
    operation(5, 2)
)


console.log('explicit Bind fn : ');
let addOperation = operation.bind({ type: 'sum' }, 5, 2)
//add
console.log(
    addOperation()
)


console.log('call fn : ');
console.log(
    operation.call({ type: 'difference' }, 5, 2)
)

console.log('apply fn : ');
let args = [5, 2]
console.log(
    operation.apply({ type: 'product' }, args)
)