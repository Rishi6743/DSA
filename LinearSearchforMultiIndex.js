function linearSearch(array, target) {
  let result = []

  for (let index = 0; index < array.length; index++) {
      if (array[index] === target) {
          result.push(index)
      }
  }
  
  return result
}

const res =  linearSearch([12, 34, 23, 7, 23, 23, 23, 23,4], 23)

console.log(res)








