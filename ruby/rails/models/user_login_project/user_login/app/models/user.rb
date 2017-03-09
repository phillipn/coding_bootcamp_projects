class User < ActiveRecord::Base
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :first_name, :last_name, :email, :age, presence: true
  validates :age, numericality: {:less_than_or_equal_to => 150, :greater_than_or_equal_to => 10}
  validates :first_name, :last_name, length: {minimum: 2}
  validates :email, format: {with: EMAIL_REGEX}

  def greeting1
    puts self
  end

  def self.greeting
    puts self
  end
end
