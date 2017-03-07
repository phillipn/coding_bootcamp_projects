for turn in (0...4)
  puts "Turn ##{turn + 1}"
    # Get Coords From User

  guess_coords = {}
  puts "Guess Row:"
  guess_coords[:row] = gets.to_i
  puts "Guess Col:"
  guess_coords[:col] = gets.to_i
end
