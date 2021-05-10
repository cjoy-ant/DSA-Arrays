const Filter = (array, filter=5) => {
  let newArray = []
  for ( let i=0; i < array.length; i++){
    if (array[i] > filter) {
      newArray.push(array[i])
    }
  }
  return newArray
}

module.exports = Filter