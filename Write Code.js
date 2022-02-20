let addToZero = (array) => {
  if (array.length < 2) {
    return false;
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
          return true;
        }
      }
    }
    return false;
  }
};

addToZero([]); // -> False
addToZero([1]); // -> False
addToZero([1, 2, 3]); // -> False
addToZero([1, 2, 3, -2]); // -> True

// O(n) Time and Space Complexity because it goes through the loop for every value we have

let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

const isPangram = (string) => {
  string = string.toLowerCase();
  return alphabets.every((x) => string.includes(x));
};

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

// O(n) Time and Space Complexity because it goes through the loop for every value we have

const findLongestWord = (array) => {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > answer) {
      answer = array[i].length;
    }
  }
  return answer;
};

findLongestWord(["hi", "hello"]); // -> 5

// O(n) Time and Space Complexity because it goes through the loop for every value we have
