class Project
  attr_accessor :name, :description

  def intialize(name, description)
    @name = name
    @description = description
  end

  def elevator_pitch
    "#{@name}, #{@description}"
  end
end
