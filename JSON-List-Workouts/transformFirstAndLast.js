/*
Parsing a list and transform the first and last elements of it:
  Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
  1) the first element of the array as the object’s key, and
  2) the last element of the array as that key’s value.

Input (Array):
  var array = ["GUVI", "I", "am", "Geek"];

Output:
  var object = {
  GUVI : "Geek"
  }

Sample Function proto:

function transformFirstAndLast(arr) {
 
 return newObject;
}
*/

function transformFirstAndLast(arr)
{
  let newObject = {};
  newObject[arr[0]] = arr[arr.length-1];
  return newObject;
}

//Quick Solution.
//Didn't think solution for corner case.
