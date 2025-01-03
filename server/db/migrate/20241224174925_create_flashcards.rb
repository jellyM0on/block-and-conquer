class CreateFlashcards < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcards do |t|
      t.references :flashcard_deck, null: false, foreign_key: { to_table: :flashcard_decks, column: :flashcard_deck_id }
      t.integer :card_type, null: false 

      t.text :question, null: false
      t.text :answer, null: false
      t.integer :order, null: false

      t.text :choices

      t.timestamps
    end
  end
end
