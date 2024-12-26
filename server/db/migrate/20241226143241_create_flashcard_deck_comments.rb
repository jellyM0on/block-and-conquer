class CreateFlashcardDeckComments < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcard_deck_comments do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }
      t.references :flashcard_deck, null: false, foreign_key: { to_table: :flashcard_decks, column: :flashcard_deck_id }
      
      t.text :text 
      
      t.timestamps
    end
  end
end
