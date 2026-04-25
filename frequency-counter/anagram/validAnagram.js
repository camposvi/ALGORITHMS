/* 
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
*/

function validAnagram(firstString, secondString){
  const hasTheSameLength = firstString.length === secondString.length
  
  if (!hasTheSameLength){
    return false
  }
  
  const firstLetterFrequency = {}
  const secondLetterFrequency = {}
  
  for (const letter of firstString){
      firstLetterFrequency[letter] = (firstLetterFrequency[letter] || 0) + 1
  }
  
  for (const letter of secondString){
      secondLetterFrequency[letter] = (secondLetterFrequency[letter] || 0) + 1
  }
  for (const key in secondLetterFrequency){
    
      if (!(key in firstLetterFrequency )){
          return false;
      }
      if (secondLetterFrequency[key] !== firstLetterFrequency[key]){
          return false;
      }
      
  }
  return true;
}

validAnagram("anagram","nagaram")
