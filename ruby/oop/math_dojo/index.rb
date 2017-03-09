class MathDojo
  def initialize
    @result = 0
  end

  def add(*args)
    @result = args.flatten.each do |n|
      @result += Float(n)
    end
    self
  end

  def subtract(*args)
    args.flatten.each do |n|
      @result -= Float(n)
    end
    self
  end

  def result
    puts @result
    self
  end
end

challenge1 = MathDojo.new.add([2,3]).add(5,8).result # => 4
challenge2 = MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result # => 23.15
