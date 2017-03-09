class ChangeCommentableField < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :commentable_id
    remove_column :comments, :commentable_type
  end
end
