class AddCommentableToComments < ActiveRecord::Migration[5.0]
  def change
    add_reference :comments, :commentable, foreign_key: true
  end
end
