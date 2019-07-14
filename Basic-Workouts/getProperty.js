/*
Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key.
If there is no property at the given key, it should return undefined.

Input:
  var obj = {
  key: “value”
  };
Output:
  value
*/

function getProperty(obj, key)
{
  if(typeof(key) == "string")
    return obj[key];
}

/*
Personal Notes:

How to check if obj.key is given to key
instead of string in key.
*/
