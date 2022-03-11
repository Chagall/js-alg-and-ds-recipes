/*
    Parameters:
        - list: An ascending ordered list where we will perform the search
        - element: the element we want to find (number)
        - left: The leftmost position of the list
        - right: The rightmost position of the list
    Return: 
        - null if the element was not found
        - The list index where it was found
*/
function binarySearchHelper(list, element, left, right) {
  // Basic requirements: 0 <= left <= right < list.length
  if (
    left > right ||
    left < 0 ||
    right < 0 ||
    left > list.length ||
    right > list.length
  ) {
    return -1;
  } else {
    let mid = Math.ceil((left + right) / 2);
    if (list[mid] === element) {
      return mid; // Found. Return the index
    } else if (list[mid] > element) {
      return binarySearchHelper(list, element, left, mid - 1);
    } else if (list[mid] < element) {
      return binarySearchHelper(list, element, mid + 1, right);
    }
  }
}

function binarySearch(list, element) {
    return binarySearchHelper(list, element, 0, list.length - 1);
}