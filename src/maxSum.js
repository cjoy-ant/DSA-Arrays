const maxSum = (array) => {
  let currentSum = 0
  let largestSum = 0

  for(let num of array){
      currentSum = Math.max(0, (currentSum + num))
      largestSum = Math.max(largestSum, currentSum)
  }
  
  return largestSum

}
module.exports = maxSum