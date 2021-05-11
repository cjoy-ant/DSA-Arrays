// const twoDArray = (array) => {
//   // let rows = []
//   let output = []
//   // loops through the array
//   for (let i=0; i < array.length; i++){
//     // let newRow = []
//     // loops through each array within the 2Darray
//     for (let j=0; j < array[i].length; j++) {
//       if (array[i][j] === 0) {
//         output = array[i].map(item => item = 0)
//         for (let k=0; k < array.length; k++) {
//           array[k][j] = 0
//         }
//         // rows.push(newRow)
//       }
//     }
//     // output.push(rows[i])
//   }
//   return output
// }

// NOT FINISHED

// SOLUTION
//function zeroRowsColumns(mat){
function twoDArray(mat){ 
  const zeroRows = []; 
  const zeroCols = [];

  for (let i=0; i<mat.length; i++) {
      let row = mat[i];
      for (let j=0; j<row.length; j++) {
          const item = row[j];
          if (item === 0) {
              zeroRows[i] = true;
              zeroCols[j] = true;
          }
      }
  }
  console.log(zeroCols, zeroRows)

  for (let i=0; i<mat.length; i++) {
      let row = mat[i];
      for (let j=0; j<row.length; j++) {
          if (zeroRows[i] || zeroCols[j]) {
              row[j] = 0;
          }
      }
  }
  
  return mat;
  
}

module.exports = twoDArray
