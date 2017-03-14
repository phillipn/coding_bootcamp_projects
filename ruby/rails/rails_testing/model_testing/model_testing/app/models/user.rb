class User < ApplicationRecord
  validates :first_name, :last_name, :presence => true
  validates :email, uniqueness: true
  validates_format_of :email,:with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
  # validate :check_email

  # protected
  # def check_email
  #   emails = User.where(email: self.email).count
  #   if emails > 0
  #     errors.add(:email, 'Unique please')
  #   end
  # end
end
