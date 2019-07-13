/*

Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

Input:
  getFullName(“GUVI”, “GEEK”);
Output:
  “GUVI GEEK”

*/


function getFullName(firstName, lastName)
{
  if(firstName.isalpha() && lastName.isalpha())
    return firstName + " " + lastName;
  
  
}


/*

Self Notes:

go and see the regex clearly.

*/
