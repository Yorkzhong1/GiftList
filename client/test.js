const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var ret1 = arr1.findIndex((value, index, arr) => {
  return value>3
})


console.log('%s', ret1)
