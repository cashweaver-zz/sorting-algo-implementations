// ref: http://www.algolist.net/Algorithms/Sorting/Quicksort
Array.prototype.quicksort = function quicksort(compare = (a, b) => (a < b), left = 0, right = this.length - 1) {
  let i = left;
  let j = right;
  let tmp;
  let pivot = this[Math.floor((left + right) / 2)];

  // Continue swapping until i is to the right of j.
  // We need to allow i === j so we can handle the recursive base case of a one
  // element array.
  while (i <= j) {

    // Move i along until we encounter an element which should be on the other
    // side of the pivot.
    while (compare(this[i], pivot)) {
      i += 1;
    }

    // Move j along until we encounter an element which should be on the other
    // side of the pivot.
    while (compare(pivot, this[j])) {
      j -= 1;
    }

    // Double check that i is to the left of j
    if (i <= j) {

      // Swap the elements
      tmp = this[i];
      this[i] = this[j];
      this[j] = tmp;

      // Move i and j along since we've already swapped the elements at their
      // positions.
      i += 1;
      j -= 1;
    }
  }

  // At this point, unless i === j, j is to the right of the pivot and we can
  // use left and j to select a sub-array of all elements to the left of the
  // pivot.
  if (left < j) {
    this.quicksort(compare, left, j);
  }

  // At this point, unless i === j, i is to the left of the pivot and we can
  // use right and i to select a sub-array of all elements to the right of the
  // pivot.
  if (i < right) {
    this.quicksort(compare, i, right);
  }

  // If i === j we don't call quicksort again as an array of length one is
  // implicitly sorted.
};

let arr = [10, 8, 6, 4, 2, 0];
arr.quicksort()
console.log(arr);

arr.quicksort((a, b) => (a > b));
console.log(arr);

let arrayOfObjects = [
  { value: 10 },
  { value: 8 },
  { value: 6 },
  { value: 4 },
  { value: 2 },
  { value: 0 },
];

arrayOfObjects.quicksort((a, b) => (a.value < b.value));
console.log(arrayOfObjects);
