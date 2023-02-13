/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (array, target) {
  let result = [];
    for (let index1 = 0; index1 < array.length - 1; index1++) {
        for (let index2 = index1+1; index2 < array.length; index2++) {
      
            if (array[index1] + array[index2] === target) {
                result.push(index1, index2);
                break;
            }
        }
  }
  return result;
};

let array = [2,5,5,11]
let target = 10;

console.log(twoSum(array, target))