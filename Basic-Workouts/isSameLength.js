/*
Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.

Input:
  isSameLength(“GUVI”, “GEEK”);
Output:
  true
*/

//This code even validates to true if the given string contains symbols instead of characters.
function isSameLength(str1, str2)
{
  return str1.length == str2.length;
}
