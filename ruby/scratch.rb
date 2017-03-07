board = []

5.times do ||
  board.push(["0", "0", "0", "0", "0"])
end


def print_board(board)
  for row in board
    puts (row.join(" "))
  end
end

# print_board(board)

def random_row(board)
  return rand(0..board.length - 1)
end

def random_col(board)
  return rand(0..board[0].length - 1)
end

# puts random_row(board)
# puts random_col(board)

ship_coords = {}
ship_coords[:row] = random_row(board)
ship_coords[:col] = random_col(board)

puts ship_coords

for turn in (0...4)
  puts "Turn ##{turn + 1}"
    # Get Coords From User

  guess_coords = {}
  puts "Guess Row:"
  guess_coords[:row] = gets.to_i
  puts "Guess Col:"
  guess_coords[:col] = gets.to_i
end
