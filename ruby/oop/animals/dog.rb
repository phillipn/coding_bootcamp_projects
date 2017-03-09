require_relative 'mammal'

class Dog < Mammal
  def pet
    puts 'petting...'
    @health += 5
  end

  def walk
    puts 'walking...'
    @health -= 1
  end

  def run
    puts 'running...'
    @health -= 10
  end
end

my_dog = Dog.new
my_dog.pet
my_dog.show_health
my_dog.walk
my_dog.show_health
