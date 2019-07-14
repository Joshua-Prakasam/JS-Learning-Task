/*
Parsing a list of lists and convert into a JSON object:
  Write a function called “transformGeekData” that transforms some set of data from one format to another.

Input (Array):
var array = [
              [["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], 
              [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]
            ];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]

Sample Function proto:
  function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    //Your code 
    return tranformEmployeeList;
  }
*/

function transformEmployeeData(arr) {
  var transformEmployeeList = [];
  arr.forEach(
  function(record)
  {
    let object = {};
    record.forEach(
      function(pair)
      {
        object[pair[0]] = pair[1];
      }
    )
    transformEmployeeList.push(object);
  }
  );
  return transformEmployeeList;
}

// Quick Solution
// Didn't care for corner case
