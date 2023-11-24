const arr = [4, 0, 5, 0, 3, 0, 0, 5]
const arr2 = [4, 0, 0, 0, 0, 5, 0, 3, 0, 0, 5]

const sort = (arr) =>
  arr.forEach((number, _idx, arr) => {
    if (number === 0) {
      const firstZeroIdx = arr.findIndex((n) => n === 0)

      const [zero] = arr.splice(firstZeroIdx, 1)

      arr.push(zero)
    }
  })

sort(arr)
sort(arr2)

console.log("arr", arr)
console.log("arr2", arr2)
