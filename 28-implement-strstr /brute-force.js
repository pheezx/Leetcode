var strStr = function (string, substring) {
  // edge case: substring="" -> 0
  if (substring === "") return 0;
  for (let i = 0; i <= string.length - substring.length; i++) {
    // check if match
    let j = 0;
    for (; j < substring.length; j++) {
      if (substring[j] !== string[i + j]) break;
    }
    // if match return i
    if (j === substring.length) return i;
  }
  return -1;
};
