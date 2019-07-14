/*
Parsing a list of lists and convert into a JSON object:
  Write a function “fromListToObject” which takes in an array of arrays, 
  and returns an object with each pair of elements in the array as a key-value pair.

Input (Array):
  var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
Output:
  var object = {
  make : “Ford”
  model : “Mustang”,
  year : 1964
  }

Sample Function proto:
  function fromListToObject(arr) {
  var newObject = {};
  return newObject;
  }
*/
function fromListToObject(arr){
  let newObject = {};
  arr.forEach(function(pair)
  {
    newObject[pair[0]] = pair[1];
  })
  return newObject;
}

//Quick Solution
// Cant verify corner cases.
