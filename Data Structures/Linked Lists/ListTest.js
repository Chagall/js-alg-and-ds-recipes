let unsortedDoublyLinkedList = new UnsortedDoublyLinkedList();

unsortedDoublyLinkedList.insert(new ListElement(1)); // OK
unsortedDoublyLinkedList.insert(new ListElement(2)); // OK
unsortedDoublyLinkedList.insert(new ListElement(3)); // OK

unsortedDoublyLinkedList.search(1); // OK
unsortedDoublyLinkedList.search(2); // OK
unsortedDoublyLinkedList.search(3); // OK
unsortedDoublyLinkedList.search(4); // NULL

unsortedDoublyLinkedList.delete(1); // true
unsortedDoublyLinkedList.delete(2); // true
unsortedDoublyLinkedList.delete(3); // true
unsortedDoublyLinkedList.delete(4); // false
unsortedDoublyLinkedList.delete(5); // false

let circularSentinelDoublyLinkedList = new CircularSentinelDoublyLinkedList();

circularSentinelDoublyLinkedList.insert(new ListElement(1)); // OK
circularSentinelDoublyLinkedList.insert(new ListElement(2)); // OK
circularSentinelDoublyLinkedList.insert(new ListElement(3)); // OK

circularSentinelDoublyLinkedList.search(1); // OK
circularSentinelDoublyLinkedList.search(2); // OK
circularSentinelDoublyLinkedList.search(3); // OK
circularSentinelDoublyLinkedList.search(4); // NULL

circularSentinelDoublyLinkedList.delete(1); // true
circularSentinelDoublyLinkedList.delete(2); // true
circularSentinelDoublyLinkedList.delete(3); // true
circularSentinelDoublyLinkedList.delete(4); // false
circularSentinelDoublyLinkedList.delete(5); // false
