class Student < ApplicationRecord
  validates :first_name, presence: true
  validates_inclusion_of :dojo, in: Dojo.all
  belongs_to :dojo, touch: true
end
