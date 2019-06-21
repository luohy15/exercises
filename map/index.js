let map = (arr, func, that) => {
  let res = []
  for (let [idx, val] of arr.entries()) {
    res.push(func.apply(that, [val, idx, arr]))
  }
  return res
}
module.exports=map