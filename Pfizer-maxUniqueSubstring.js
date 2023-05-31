//Find max Unique Substring 
const maxUniqueSubstring = (strInput) => {
  if (typeof strInput !== "string") {
    return "Please provide a valid string input"
  }

  let maxSubstringLength = 0;
  let maxRange = [0, 0];
  let uniqChar = new Set();
  let i = 0;
  let j = 0;

  while (j < strInput.length) {
    let iChar = strInput[i];
    let jChar = strInput[j];

    while (uniqChar.has(jChar)) {
      uniqChar.delete(iChar);
      i++;
      iChar = strInput[i];
    }

    uniqChar.add(jChar);

    if (j - i + 1 > maxSubstringLength) {
      maxSubstringLength = j - i + 1;
      maxRange = [i, j];
    }

    j++;
    jChar = strInput[j];
  }

  const [maxI, maxJ] = maxRange;
  return strInput.slice(maxI, maxJ + 1);
};


//Test Cases
str1 = "abcdeee"
console.log(maxUniqueSubstring(str1)) // "abcde"
str2 = ""
console.log(maxUniqueSubstring(str2)) // ""
str3 = "fdajdfljjjasdfjjkasldfk"
console.log(maxUniqueSubstring(str3)) // "jkasldf"
str4 = "ddddddddddd"
console.log(maxUniqueSubstring(str4)) // "d"
str5 = 5436
console.log(maxUniqueSubstring(str5)) // "Please provide a valid string input"
str6 = "dddddjkloi"
console.log(maxUniqueSubstring(str6)) // "djkloi"
str7 = "abccdfcc"
console.log(maxUniqueSubstring(str7)) // "abc"