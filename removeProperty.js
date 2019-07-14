/*
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.

Input:
  removeProperty(obj, “name”);
Output:
  undefined
*/

function removeProperty(obj, key)
{
  if(obj.hasOwnProperty(key))
  {
    delete obj[key];
    return obj[key];
  }
  return "Error: " + '"'+ key +'"' + "is not a property of given object";
}


/*
Personal Notes:
*/
