/*
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

Input:
  isEven(11);
Output:
  false

*/

function isEven(num)
{
  if(num < 0)
    return "Invalid Input";
  
  return num % 2 == 0;
}
