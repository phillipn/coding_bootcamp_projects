require_relative 'mammal'

class Lion < Mammal
  attr_accessor :health

  def initialize
    @health = 170
  end

  def fly
    puts 'flying...'
    @health -= 50
  end

  def show_health
    puts 'This is a lion'
    super
  end
end

lion = Lion.new
lion.fly
lion.show_health
# puts lion.health
