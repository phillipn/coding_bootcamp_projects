class User < ApplicationRecord
  attr_accessor :password_confirmation
  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  PASSWORD_REGEX = /[!#@$%]+/

  validates :username, presence: true, uniqueness: true, length: {minimum:6}
  validates :email, format: { with: EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, format: { with: PASSWORD_REGEX }, presence: true, length: {minimum: 8}
  validate :password_matcher

  protected
  def password_matcher
    puts self.password
    puts self.password_confirmation
    puts self.password == self.password_confirmation
    if self.password != self.password_confirmation
      errors.add(:password_confirmation, 'Passwords must match')
    end
  end
end
