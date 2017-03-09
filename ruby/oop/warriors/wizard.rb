require_relative 'human'

class Wizard < Human
  def initialize(health=50, intelligence=50)
    @health = health
    @intelligence = intelligence
  end

  def heal
    @health += 10
  end

  def fireball(opponent)
    opponent.health -= 20
  end
end
