class Todo < ApplicationRecord
  belongs_to :user
  validates :content, :due_date, presence: true
  validates_date :due_date, :on_or_after => :today
end
