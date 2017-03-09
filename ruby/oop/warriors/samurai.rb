require_relative 'human'

class Samurai < Human
  @@how_many = 0
  def initialize
    @health = 200
    super
    @@how_many += 1
  end

  def death_blow(opponent)
    opponent.health = 0
  end

  def meditate
    @health = 200
  end

  def self.show
    @@how_many
  end
end

puts Samurai.show
