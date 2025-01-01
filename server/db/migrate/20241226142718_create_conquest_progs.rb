class CreateConquestProgs < ActiveRecord::Migration[8.0]
  def change
    create_table :conquest_progs do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }
      t.references :conquest, null: false, foreign_key: { to_table: :conquests, column: :conquest_id }

      t.integer :progress, null: false
      
      t.timestamps
    end
  end
end
