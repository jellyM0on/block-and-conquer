class CreateUserProfileItems < ActiveRecord::Migration[8.0]
  def change
    create_table :user_profile_items do |t|
      t.references :profile_item, null: false, foreign_key: { to_table: :profile_items, column: :profile_item_id }
      t.references :user, null: false,  foreign_key: { to_table: :users, column: :user_id }
     
      t.integer :status, null: false 
      
      t.timestamps
    end
  end
end
