class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.references :user, foreign_key: true
      t.string :content
      t.date :due_date
      t.boolean :is_completed

      t.timestamps
    end
  end
end
