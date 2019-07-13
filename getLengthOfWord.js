/*
Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.

Input:
  getLengthOfWord(“GUVI”);
Output:
  4
*/
function getLengthOfWord(str){
  return str.length;
}

/*
// I can also use this to count length
// But it wont be necessary because it keeps tracks in its properties
function getLengthOfWord(str){
  let count = 0;
  while(str[count++] != null);
  return count-1;
}

*/
