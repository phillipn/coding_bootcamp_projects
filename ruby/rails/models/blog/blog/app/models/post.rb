class Post < ApplicationRecord
  belongs_to :topic
  belongs_to :user
  has_many :comments, as: :commentable
  has_many :messages, dependent: :destroy
  validates :title, :content, presence: true
  validates :title, length: {minimum: 7}
end
