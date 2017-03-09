require_relative 'human'

class Ninja < Human
  def initialize
    @stealth = 175
    super
  end

  def steal(opponent)
    attack(opponent)
    @health += 10
  end

  def get_away
    @health -= 15
  end
end

ninja = Ninja.new
human = Human.new

puts ninja.health
puts human.health
ninja.steal(human)
puts ninja.health
puts human.health
