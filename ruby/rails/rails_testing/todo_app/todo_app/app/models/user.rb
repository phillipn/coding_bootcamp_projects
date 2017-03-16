class User < ApplicationRecord
  attr_accessor :password_confirmation
  has_many :todos

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, format: EMAIL_REGEX, uniqueness: true
  validates :password, length: {minimum: 5}
  validate :password_match

  protected
    def password_match
      if self.password != self.password_confirmation
        errors.add(:password_confirmation, "Passwords do not match")
      end
    end
end
