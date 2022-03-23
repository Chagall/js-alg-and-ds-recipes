/*
    Insert:
    Parameters:
        - array: The array to be sorted
        - index: The index of the element to be sorted
*/
function insert(array, index) {
  for (let i = index - 1; i >= 0; i--) {
    if (array[i] > array[i + 1]) {
      console.log("Swapping: ", array[i], " and ", array[i + 1]);
      // Swap
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    } else {
      break;
    }
  }
}

/*
    Insertion Sort
    Parameters: 
        - array: The array to be sorted
    Return:
        - The sorted array
*/
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    insert(array, i);
  }

  return array;
}
