const Products = (array) => {
  let resultsArray = []
  for (let i=0; i < array.length; i++){
    let product = 1
    for (let j=0; j < array.length; j++) {
      if (array[i] !== array[j]) {
        product *= array[j]
      }
    }
    resultsArray.push(product)
  }
  return resultsArray
}

module.exports = Products