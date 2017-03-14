class Dojo < ApplicationRecord
  has_many :students, dependent: :destroy
  validates :branch, presence: true
end
