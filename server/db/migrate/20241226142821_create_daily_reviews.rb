class CreateDailyReviews < ActiveRecord::Migration[8.0]
  def change
    create_table :daily_reviews do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }

      t.integer :sessions, null: false
      t.integer :points, null: false
      t.integer :tokens, null: false
      t.integer :breaks, null: false
      t.integer :time, null: false
      
      t.timestamps
    end
  end
end
