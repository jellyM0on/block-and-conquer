class CreateSites < ActiveRecord::Migration[8.0]
  def change
    create_table :sites do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }
      
      t.text :site_url 
      t.integer :status 
      
      t.timestamps
    end
  end
end
