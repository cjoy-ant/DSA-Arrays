const twoDArray = (array) => {
  let rows = []
  let output = []
  // loops through the array
  for (let i=0; i < array.length; i++){
    let newRow = []
    // loops through each array within the 2Darray
    for (let j=0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        newRow = array[i].map(item => item = 0)
        rows.push(newRow)
      }
    }
    output.push(rows[i])
  }
  return output
}

module.exports = twoDArray

// NOT FINISHED