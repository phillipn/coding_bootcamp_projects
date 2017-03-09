def return_gt_10
  arr = [3,5,1,2,7,9,8,13,25,32]
  puts arr.reduce(:+)
  return arr.select { |num| num > 10 }
end

# print return_gt_10

def names_arr
  arr = %w[John KB Oliver Cory Matthew Christopher]
  puts arr.shuffle
  arr.select { |item| item.length > 5 }
end

# print names_arr

def all_letters
  arr = [*'a'..'z']
  arr.shuffle!
  print arr[-1], arr[0]
  print('First letter is vowel') if arr[0] =~ /[aeiou]/
end

# all_letters

def generate_arr
  arr = []
  10.times do |i|
    arr.push(rand(55..100))
  end
  print arr
end

# generate_arr

def generate_arr_sorted
  arr = []
  10.times do |i|
    arr.push(rand(55..100))
  end
  print({
    numbers: arr.sort,
    min: arr.min,
    max: arr.max
  })
end

# generate_arr_sorted

def random_string
  str = ""
  5.times { str += (65+rand(26)).chr }
  return str
end

# random_string

def gen_random_arr
  arr = []
  5.times { arr.push(random_string) }
  print arr
end

gen_random_arr
