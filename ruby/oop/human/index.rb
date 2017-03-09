class Human
  attr_accessor :health

  def initialize(strength = 3, intelligence = 3, stealth=3, health =100)
    @strength = strength
    @intelligence = intelligence
    @stealth = stealth
    @health = health
  end

  def attack(opponent)
    if opponent.class.ancestors.include? Human
      opponent.health -= 5
    end
  end
end

nick = Human.new
zack = Human.new

nick.attack(zack)
puts zack.health
