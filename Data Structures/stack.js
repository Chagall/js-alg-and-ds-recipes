class Stack {
  constructor(size) {
    this.stack = new Array(size);
    this.top = -1;
  }

  isEmpty = () => {
    return this.top === -1 ? true : false;
  };

  isFull = () => {
    return this.top === this.stack.length - 1 ? true : false;
  };

  push = (element) => {
    if (!this.isFull()) {
      this.top += 1;
      this.stack[top] = element;
    } else {
      throw Error("Stack overflow");
    }
  };

  pop = () => {
    if (!this.isEmpty()) {
      this.top -= 1;
      return this.stack[this.top + 1];
    } else {
      throw Error("Stack underflow");
    }
  };
}

// --------- Testing the stack ---------

let stack = new Stack(1);
console.log(stack.isEmpty()); // true

try {
  stack.pop(); // Underflow
} catch (e) {
  console.log(e.message);
}

stack.push(10); // OK

console.log(stack.isFull()); // true

try {
  stack.push(2); // Overflow
} catch (e) {
  console.log(e.message);
}
