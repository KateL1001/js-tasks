function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x); 
    },
    baz: function() {
      console.log(this.x); 
    },
  };
}

const obj1 = foo();
obj1.bar();  // 10
obj1.baz();  // 20

const obj2 = foo.call({ x: 30 });
obj2.bar();  // 30
obj2.baz();  // 20

let y = obj2.bar;
let x = obj2.baz;
y();  // undef
x();  // und
obj2.bar(); // 30
obj2.baz(); // 20


// ------------------------*************----------------------- //

// Что будет выведено?

const obj = {
    name: 'Alice',
    greet: function() {
        return `Hello, ${this.name}!`;
    },
    greetArrow: () => {
        return `Hello, ${this.name}!`;
    },
    delayedGreet: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    },
    delayedGreetArrow: function() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};

console.log(obj.greet());              // Hello,Alice 
console.log(obj.greetArrow());         // Hello,!
obj.delayedGreet();                    // undef
obj.delayedGreetArrow();               // Hello,Alice

