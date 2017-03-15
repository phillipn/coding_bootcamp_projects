class Comment < ApplicationRecord
  belongs_to :message
  belongs_to :user

  validates :comment, presence: true
end
