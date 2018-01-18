/* Check if word is Palindrome
  Palindrome - is a word, phrase, number, or other sequence of characters which reads the same backward as forward
*/

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}