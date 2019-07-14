/*
Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

Input:
  areBothOdd(1, 3);
Output:
  true
*/

function areBothOdd(num1, num2)
{
  if(num1 < 0 || num2 < 0) 
    return "Invalid Input";
    
  return (num1%2==1 && num2%2==1);
}
