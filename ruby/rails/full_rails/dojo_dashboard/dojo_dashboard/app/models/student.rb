class Student < ApplicationRecord
  attr_accessor :dojo_id
  validates :first_name, presence: true
  validates_inclusion_of :dojo, in: Dojo.all
  belongs_to :dojo
end
