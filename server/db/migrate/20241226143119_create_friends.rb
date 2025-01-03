class CreateFriends < ActiveRecord::Migration[8.0]
  def change
    create_table :friends do |t|
      t.references :user_1, null: false, foreign_key: { to_table: :users, column: :user_id }
      t.references :user_2, null: false, foreign_key: { to_table: :users, column: :user_id }
      
      t.integer :status
      
      t.timestamps
    end
  end
end
