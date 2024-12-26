class CreateProfileItems < ActiveRecord::Migration[8.0]
  def change
    create_table :profile_items do |t|
      t.integer :type, null: false
      t.integer :price, null: false
      t.integer :style, null: false 
      t.string :reference, null: false
      
      t.timestamps
    end
  end
end
