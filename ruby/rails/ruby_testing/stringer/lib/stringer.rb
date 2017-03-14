require "stringer/version"

module Stringer
  def self.spacify *strings
    string = ""
    strings.each do |s|
      if string == ""
        string += s
      else
        string += " " + s
      end
    end
    string
  end

  def self.minify word, n
    str = ""
    word.each_char.with_index do |char, index|
      if index < n
        str += char
      else
        str += '...'
        break
      end
    end
    return str
  end

  def self.replacify sentence, word, new_word
    split = sentence.split()
    split.each_with_index do |w, index|
      if w == word
        split[index] = new_word
      end
    end
    return split.join ' '
  end

  def self.tokenize sentence
    return sentence.split
  end

  def self.removify sentence, word
    split = sentence.split()
    split.each_with_index do |w, index|
      if w == word
        split[index] = ""
      end
    end
    split.delete("")
    split.join ' '
  end
end
