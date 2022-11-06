/*Exercise 3.4
Refactor the above stack implementation, using the concept of closure, 
such that there is noway to access items array outside of createStack() function scope
*/

function createStack() {

    let items = [];

    return {
        push: (ele) => {
            items.push(ele)
        },
        pop: (ele) => {
            items.pop(ele)
        },
        status: () => {
            console.log(items);
        }
    }

}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5 
console.log(stack.items); // => undefined
stack.status()