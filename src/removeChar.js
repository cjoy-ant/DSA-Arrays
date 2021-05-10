const removeChar = (string, chars) => {
  let stringArray = string.split('');
  let charArray = chars.split('');
  let newString = []
  for (let i=0; i < stringArray.length; i++){
    for (let j=0; j < charArray.length; j++) {
      if (stringArray[i] === charArray[j]) {
        newString = stringArray.filter(letter => letter !== charArray[j])
        stringArray = newString
      }
    } 
  }
  return newString.join('')
}

module.exports = removeChar