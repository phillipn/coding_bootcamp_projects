class Dojo < ApplicationRecord
  has_many :ninjas
  validates :name, :city, :state, presence: true
  validates :state, length: {minimum: 2}
end
