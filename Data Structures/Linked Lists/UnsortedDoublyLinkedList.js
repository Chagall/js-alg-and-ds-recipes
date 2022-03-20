class UnsortedDoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // Searches the linked list for given key (O(n))
  // Returns the element with 'key' if found or null, otherwise
  search(key) {
    let element = this.head;

    while (element !== null && element.key !== key) {
      element = element.next;
    }

    return element;
  }

  // Inserts at the beginning (O(1))
  insert = (element) => {
    element.next = this.head;
    element.prev = null;

    if (this.head !== null) {
      this.head.prev = element;
    }

    this.head = element;
  };

  // Returns true if the element was found and deleted
  // Returns false otherwise
  delete = (key) => {
    let element = this.search(key);
    // If the element was found
    if (element !== null) {
      // Check prev
      if (element.prev !== null) {
        element.prev.next = element.next;
      } else {
        this.head = element.next;
      }
      // Check next
      if (element.next !== null) {
        element.next.prev = element.prev;
      }
      return true;
    } else {
      return false;
    }
  };
}
