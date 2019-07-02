let once = function (func) {
  var result
  return function () {
    if (func) {
      result = func.apply(this, arguments)
      func = null
    }
    return result
  }
}

module.exports=once