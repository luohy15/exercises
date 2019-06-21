let qs = (l, r, arr) => {
  let p = arr[Math.floor((l + r) / 2)]
  let i = l, j = r
  while (i <= j) {
    while (arr[i] < p) {
      i++
    }
    while (arr[j] > p) {
      j--
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  if (l < j) {
    qs(l, j, arr)
  }
  if (i < r) {
    qs(i, r, arr)
  }
}
let quickSort = (arr) => {
  qs(0, arr.length - 1, arr)
  return arr
}
module.exports=quickSort