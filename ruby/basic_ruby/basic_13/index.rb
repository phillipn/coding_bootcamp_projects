def one_to_255
  # (1..255).each do |number|
  #   puts number
  # end
  (1..255).each { |num| puts num }
end

# one_to_255

def odds_to_255
  # (1..255).select { |num| puts num  if num % 2 != 0}
  (1..255).each { |num| puts num  if num % 2 != 0}
end

# odds_to_255

def print_sum
  sum = 0
  (1..255).each do |number|
    sum += number
    puts "New number is #{number} and the sum is #{sum}"
  end
end

# print_sum

def loop_array(arr)
  arr.each { |item| puts item }
end

# loop_array([1,2,3])

def find_max(arr)
  puts arr.max
end

# find_max([3,6,7,1,90])

def find_avg(arr)
  sum = 0
  arr.each do |num|
    sum += num
  end
  puts sum.to_f / arr.length.to_f
end

# find_avg([1, 3, 6])

def arr_with_odds
  # range = (1..255).select {|num| num % 2 != 0}
  # puts range
  arr = [*1..255].select {|num| num % 2 != 0}
  print arr
end

# arr_with_odds

def arr_count y, arr
  puts arr.count {|val| y < val}
end

# arr_count(10, [1,2,63,33,1])

def square(arr)
  print arr.map {|val| val * val }
end

# square([2,5,7,9])

def elim_negs(arr)
  print arr.delete_if {|val| val < 0}
end

# elim_negs([4,2,1,-8,-9])

def hash_w_vals(arr)
  puts({ :min => arr.min, :max => arr.max, 'avg' => (arr.reduce(0,:+) / arr.size.to_f) })
end

# hash_w_vals([1,2,4,6,3])

def shift_to_front(arr)
  if arr.length > 1
    arr.shift()
    arr.push(0)
    print arr
  else
    return arr
  end
end

# shift_to_front([1,5])

def number_to_string(arr)
  print arr.map {|val| val < 0 ? 'Dojo' : val}
end

number_to_string([3, 4, 2, -4])
