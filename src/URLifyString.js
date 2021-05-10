function URLifyString(value) {
  const string = value.split("");
  const URLstring = string.map((item) => {
    if (item === " ") {
      return "%20";
    }
    return item;
  });

  return URLstring.join("");
}

module.exports = URLifyString;
