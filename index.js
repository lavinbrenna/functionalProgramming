// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

//non recursive
let string = "Jasmine Ann Jones";
function makeUrl(string){
  let stringToReplace = string.split('');
  let urlString = [];
  for(let i=0; i < stringToReplace.length; i++){
    if(stringToReplace[i]!= ' ')
    {
      urlString.push(stringToReplace[i]);
    }
    else{
      urlString.push('%20');
    }
  }
  return urlString.join('');
}
//recursive ~ does not work properly
const recurseReverse = (string) => {
  if (string === " ") {
    return "%20";
  } else {
    return recurseReverse(string.substring(1)) + string[0];
  }
}


// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Output: [7, 9, "hi", 12, 53]
let nums = [7, 9, "hi", 12, "hi", 7, 53];

function setArray(arr){
let newArray = [...new Set(arr)];
console.log(newArray);
}

//set automatically stores unique values

//with filter

function filterArray(arr){
  let newArray = arr.filter((element, index)=> {
    return arr.indexOf(element) === index;
});
  console.log(newArray);
}

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"
let newString = "aaabccdddda";
function compressedString(string){
  let stringArray = string.split('');
  let newArray = [];
  let counter = 1;
  for(let i=0; i < stringArray.length; i ++){
    if(stringArray[i] === stringArray[i+1]){
    counter += 1;
    }
    else{
      if(counter >= 2){
          newArray.push(counter + stringArray[i]);
          counter = 1;
        }
        else{
          newArray.push(stringArray[i]);
        }
      }
    }
    console.log(newArray.join(''));
}
compressedString(newString)




// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true
let input1="hello";
let input2="copyright";
function isUnique(string){
  let array = [];
for(let i=0; i< string.length; i ++){
  if(string[i] === string[i+1]){
    array.push('false');
  }
  else{
    array.push('true');
  }
}
if(array.includes('false')){
  return false;
}
else{
  return true;
}
}
isUnique(input1)
isUnique(input2)
