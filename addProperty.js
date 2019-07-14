/*
Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given object with a value of true.

Input:
  addProperty(myObj, “myProperty”);
Output:
  {myProperty: true}
*/

function addProperty(obj, key)
{
  obj[key] = true;
  return obj.valueOf();
}

/*
Personal Notes:
Check toString, valueOf, toSource, 
*/
