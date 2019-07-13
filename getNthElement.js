/*
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.
If the array has a length of 0, it should return ‘undefined’.

Input:
  getNthElement([1, 3, 5], 1);
Output:
  3
*/

function getNthElement(array, N)
{
  if(array.length==0)
  {
    return array;
  }
  else if(N >= array.length || N < 0 )
    return "Invalide Nth Element Input";
  else if(Array.isArray(array))
  {
    return array[N];
  }
}
