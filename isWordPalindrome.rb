=begin Check if word is Palindrome
  Palindrome - is a word, phrase, number, or other sequence of characters which reads the same backward as forward
=end

def isPalindrome(str)
  str = str.gsub(/\W/, '').downcase
  str == str.split('').reverse.join('')
end