/*
Parsing an JSON object and convert it to a list:

Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: "ISRO", age: 35, role: "Scientist"};
Output:
[["name", "ISRO"], ["age", 35], ["role", "Scientist"]]

Sample Function proto:
  function convertListToObject(obj) {
   // your code here
  }
*/

function convertObjectToList(obj) {
  return Object.entries(obj);
}

//Quick Solution
