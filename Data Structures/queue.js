class Queue {
  constructor(size) {
    this.queue = new Array(size);
    this.head = 0;
    this.tail = 0;
  }

  isEmpty = () => {
    return this.head === this.tail;
  };

  isFull = () => {
    let case1 = this.head === 0 && this.tail === this.queue.length;
    let case2 = this.tail + 1 === this.head;
    return case1 || case2;
  };

  enqueue = (element) => {
    if (this.isFull()) {
      throw new Error("Queue overflow");
    } else {
      this.queue[this.tail] = element;
      if (this.tail == this.queue.length) {
        this.tail = 0;
      } else {
        this.tail += 1;
      }
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      throw new Error("Queue underflow");
    } else {
      let element = this.queue[this.head];
      if (this.head === this.queue.length) {
        this.head = 0;
      } else {
        this.head += 1;
      }
      return element;
    }
  };
}

let queue = new Queue(2);
console.log(queue.isEmpty()); // true

try {
  queue.dequeue(); // Underflow
} catch (e) {
  console.log(e.message);
}

queue.enqueue(10); // OK
queue.enqueue(11); // OK

console.log(queue.isFull()); // true

try {
  queue.enqueue(2); // Overflow
} catch (e) {
  console.log(e.message);
}

queue.dequeue(); // OK
queue.dequeue(); // OK
console.log(queue.isEmpty()); // true