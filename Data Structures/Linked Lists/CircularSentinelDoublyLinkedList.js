import ListElement from "./ListElement";

export default class CircularSentinelDoublyLinkedList {
  constructor() {
    this.sentinel = new ListElement(null, null, null);
  }

  // Searches the linked list for given key (O(n))
  // Returns the element with 'key' if found or null, otherwise
  search(key) {
    let element = this.sentinel.next;

    while (element !== null && element.key !== key) {
      element = element.next;
    }

    return element;
  }

  // Inserts at the beginning (O(1))
  insert = (element) => {
    element.next = this.sentinel.next;
    this.sentinel.next.prev = element;
    this.sentinel.next = element;
    element.prev = this.sentinel;
  };

  // Returns true if the element was found and deleted
  // Returns false otherwise
  delete = (key) => {
    let element = this.search(key);
    // If the element was found
    if (element !== null) {
      element.prev.next = element.next;
      element.next.prev = element.prev;
      return true;
    } else {
      return false;
    }
  };
}
