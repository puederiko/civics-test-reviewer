//globals
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // set questions
let numsLength = nums.length; // set length of the questions array

// while numsLength is true
while (numsLength) {
  // gather a random number from 1 to question's array length, then length--
  let randomEl = Math.floor(Math.random() * numsLength--);
  // splice an element from the array with randomEl as the index
  let spliceEl = nums.splice(randomEl, 1);
  // push the only element from spliceEl back to the original questions array
  // this keeps the already chosen element from being selected in the next iteration
  nums.push(spliceEl[0]);
  console.log(nums);
}
