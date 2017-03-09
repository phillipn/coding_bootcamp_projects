class Message < ApplicationRecord
  belongs_to :post
  belongs_to :user
  has_many :comments, as: :commentable
  validates :author, :message, presence: true
  validates :message, length: {minimum: 15}
end
