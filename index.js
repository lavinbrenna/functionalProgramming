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

//even shorter !!
let urlString = "Jasmine Ann Jones";
function makeUrl(string){
  return string.split(" ").join("%20");
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


function setArray(arr){
  let newArray = [...new Set(arr)];
  return newArray;
}
// let nums = [7, 9, "hi", 12, "hi", 7, 53];
// function setArray(arr){
//   let newArray = [];
//   for(let i = 0; i < arr.length; i++)
//   {for(let j = 0;j < arr.length; j++)
//     {
//       if(arr[j] != arr[i]){
//         newArray.push(arr[j]);
//       }
//     }
//   }
//   console.log(newArray);
// }
//set automatically stores unique values



//with filter

function filterArray(arr){
  let newArray = arr.filter((element, index)=> {
  return arr.indexOf(element) === index;
  });
  return newArray;
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
    else if(counter >= 2){
      newArray.push(counter + stringArray[i]);
      counter = 1;
    }
    else{
        newArray.push(stringArray[i]);
      }
    }
    console.log(newArray.join(''));
}
compressedString(newString);


function compressedString(string){
  let newArray = [];
  let counter = 1;
  for(let i=0; i < string.length; i ++){
    if(string[i] === string[i+1]){
    counter += 1;
    }
    else if(counter >= 2){
      newArray.push(counter + string[i]);
      counter = 1;
    }
    else{
        newArray.push(string[i]);
      }
    }
    console.log(newArray.join(''));
}
compressedString(newString);



// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true
let input1="hello";
let input2="copyright";
let input3 ="circle";
let input4 = "pipeline";

function isUnique(string){
  let unique = true;
  for(let i=0; i< string.length; i ++){
    for(let j= i + 1;string.length; j++){
      if(string[j] === string[i]){
        unique = false;
        return unique;
      }
    }
  }
  console.log(unique);
  return unique;
}

// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

let nums = [9,2,7,12];
function selectionSort(array) {
  for (let i= 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const higherValue = array[i];
        array[i] = array[j];
        array[j] = higherValue;
      }
    }
  }
  return array;
}
selectionSort(nums)
