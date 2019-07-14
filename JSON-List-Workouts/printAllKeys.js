/*
Parsing an JSON object’s Keys:
  Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

Example Input:
  {name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
  [‘name’, ‘age’, ‘hasPets’]

Sample Function proto:
  function printAllKeys(obj) {
   // your code here
  }
*/
function printAllKeys(obj)
{
  return Object.getOwnPropertyNames(obj);
}

//Quick Solution
