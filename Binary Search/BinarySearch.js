function ternery(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid1 = Math.floor((right - left) / 3 + left);
    let mid2 = Math.floor(right - (right - left) / 3);

    if (arr[mid1] === key) {
      return mid1;
    } else if (key > arr[mid1]) {
      left = mid1++;
    } else if (arr[mid2] === key) {
      return mid2;
    } else if (key > arr[mid2]) {
      left = mid2++;
    } else {
      right = mid2--;
    }
  }

  return -1;
}

console.log(ternery([2, 3, 5, 7, 8, 9, 10, 13, 14], 7));
