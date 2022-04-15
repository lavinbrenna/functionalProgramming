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
  for(let i=0; i < stringToReplace.length; i ++){
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
//recursive
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

//with filter

function filterArray(arr){
  let newArray = arr.filter((element, index)=> {
    return arr.indexOf(element) === index;
});
  console.log(newArray);
}