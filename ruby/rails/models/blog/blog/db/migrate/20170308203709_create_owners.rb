class CreateOwners < ActiveRecord::Migration[5.0]
  def change
    create_table :owners do |t|
      t.references :user, foreign_key: true
      t.references :topic, foreign_key: true

      t.timestamps
    end
  end
end
