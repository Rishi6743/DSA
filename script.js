function linearSearch(array, target) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      result.push(i);
    }
 
  }


  return -1;
}

// console.log(linearSearch([1, 5, 3, 4, 7, 5, 6], 5));

(function linearSearch2() {
  let target = 23;
  let array = [ 45, 556, 67, 756, 23, 23];
  let found = linearSearch(array, target);
  if (found === -1) {
    console.log("Target not found in the arr");
  } else {
    console.log(`Target ${target} found in the arr at index ${found}`);
  }
})();
