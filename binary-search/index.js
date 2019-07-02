let search = (arr, target) => {
  if (arr.length) {
    let i = 0, j = arr.length - 1
    while (i <= j) {
      let p = Math.floor((i + j) / 2)
      if (arr[p] > target) {
        j = p - 1
      } else if (arr[p] === target) {
        return p
      } else {
        i = p + 1
      }
    }
  }
  return -1
}

module.exports=search
