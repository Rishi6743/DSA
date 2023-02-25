function terneryRecursive(arr, key, left, right) {
  if (left > right) {
    return -1;
  }

 
  var mid1 = left + Math.floor((right - left) / 3);
  var mid2 = right - Math.floor((right - left) / 3);

  if (arr[mid1] === key) {
    return mid1;
  } else if (arr[mid2] === key) {
    return mid2;
  } else if (arr[mid1] > key) {
    right =mid1-1;
    return terneryRecursive(arr, key, left, right);
  } else if (arr[mid1] < key) {
    left = mid1+1;
    return terneryRecursive(arr, key, left, right);
  } else if (arr[mid2] > key) {
    right = mid2-1;
    return terneryRecursive(arr, key, left, right);
  } else if (arr[mid2] < key) {
    left = mid2+1;
    return terneryRecursive(arr, key, left, right);
  }
}

let arr = [2, 3, 5, 7, 8, 9, 10, 13, 14];
console.log(terneryRecursive(arr, 7, 0, arr.length - 1));



