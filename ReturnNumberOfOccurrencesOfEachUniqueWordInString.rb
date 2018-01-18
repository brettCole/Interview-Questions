# Given a string return the count of each unique word 

def uniqueWordCount(str)
  obj = {}
  str = str.gsub(/\W/, ' ').downcase.strip.split(/\s+/)
  str.each do |i|
    if !obj.key?(i)
      obj[i] = 0
    end
    obj[i] += 1
  end
  obj
end