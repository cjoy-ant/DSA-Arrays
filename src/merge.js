const Merge = (arr1, arr2) => {
  let mergedArray = arr1
  for (let num of arr2) {
    mergedArray.push(num)
  }
  return mergedArray.sort(function(a,b){return a-b})
};

module.exports = Merge;
