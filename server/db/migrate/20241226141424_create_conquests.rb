class CreateConquests < ActiveRecord::Migration[8.0]
  def change
    create_table :conquests do |t|
      t.text :description, null: false
      t.string :reward, null: false
      t.integer :progress_increment, null: false

      t.timestamps
    end
  end
end
