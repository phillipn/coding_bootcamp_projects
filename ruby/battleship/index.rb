class Array
  def random
    shuffle.first
  end
end

$board = []

# Create $board Matrix
5.times do ||
  $board.push(["0", "0", "0", "0", "0"])
end

# Pretty Print The $board
def print_board(board)
  for row in board
    puts (row.join(" "))
  end
end

# Get Random Coords
def random_row(board)
  return rand(0..board.length - 1)
end

def random_col(board)
  return rand(0..board[0].length - 1)
end

def nearby_coords(num)
  if num == 0
    return [1]
  elsif num == 1
    return [0, 2]
  elsif num == 2
    return [1, 3]
  elsif num == 3
    return [2, 4]
  else
    return [3]
  end
end

def get_coords
  ship_coords = {ship1: {}, ship2: {}}
  coords = []
  ship = true

  ship_coords.each do |key, value|
    puts "manipulating #{key}"
    coord = [random_row($board), random_col($board)]
    print "#{coord}\n"

    if coords.include? coord
      return false
    end

    coords.push(coord)

    ship_coords[key][:rows] = [coord[0]]
    ship_coords[key][:cols] = [coord[1]]

    row = [true, false].sample
    our_pick = ''

    if row
      puts 'row picked, manipulate row'
      current_row_coordinate = coord[0]
      our_pick = nearby_coords(current_row_coordinate).random
      coord = [our_pick, ship_coords[key][:cols][0]]
      print "#{coord}\n"

      if coords.include? coord
        ship = false
      end

      coords.push coord

      ship_coords[key][:rows].push(our_pick)
      ship_coords[key][:cols].push(coord[1])
    else
      puts 'column picked, manipulate column'
      current_col_coordinate = ship_coords[key][:cols][0]

      our_pick = nearby_coords(current_col_coordinate).random

      coord = [ship_coords[key][:rows][0], our_pick]
      print "#{coord}\n"

      if coords.include? coord
        ship = false
      end

      coords.push coord

      ship_coords[key][:rows].push(ship_coords[key][:rows][0])
      ship_coords[key][:cols].push(our_pick)
    end
  end
  if ship
    return ship_coords
  else
    return false
  end
end

# Start The Game
puts ("Let's play Battleship!")
print_board($board)

# Store The Ship Coords In A Dictionary
while(true)
  ship_coords = get_coords
  if !ship_coords
    next
  else
    puts ship_coords
    break
  end
end

counter = 0
# Main Game Loop -- User Has 4 Tries
for turn in (0...6)
  puts "Turn ##{turn + 1}"
    # Get Coords From User

  guess_coords = {}
  puts "Guess Row:"
  guess_coords[:row] = gets.to_i
  puts "Guess Col:"
  guess_coords[:col] = gets.to_i

  # Check If Guess Matches The Ship
  if (ship_coords[:ship1][:rows].include?(guess_coords[:row]) and ship_coords[:ship1][:cols].include?(guess_coords[:col])) || (ship_coords[:ship2][:rows].include?(guess_coords[:row]) and ship_coords[:ship2][:cols].include?(guess_coords[:col]))
    counter = counter + 1
    puts "You hit my battleship!"
    $board[guess_coords[:row]][guess_coords[:col]] = "H"
    if counter == 4
      puts 'Congrats you sob'
      break
    end
  else
    # Print Appropriate Message To User
    if (guess_coords[:row] < 0 or guess_coords[:row] > 4) or (guess_coords[:col] < 0 or guess_coords[:col] > 4)
      puts "Oops, that's not even in the ocean."
    elsif($board[guess_coords[:row]][guess_coords[:col]] == "X" or $board[guess_coords[:row]][guess_coords[:col]] == 'H')
      puts "You guessed that one already."
    else
      puts "You missed my battleship!"
      $board[guess_coords[:row]][guess_coords[:col]] = "X"
    end
  end


  if turn == 5
    puts "Game Over"
  end

# Stop User So They Can Read Message
  puts "PRESS ANY KEY TO CONTINUE..."
  gets
  print_board($board)

end
