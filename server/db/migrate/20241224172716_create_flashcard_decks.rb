class CreateFlashcardDecks < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcard_decks do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }

      t.string :name, null: false
      t.text :description, null: false 
      t.integer :deck_type, null: false 
      t.integer :subject, null: false 
      t.integer :privacy_status, null: false 
      t.json :tags
      t.integer :last_edited_by 
      t.integer :views 

      t.timestamps
    end
  end
end
