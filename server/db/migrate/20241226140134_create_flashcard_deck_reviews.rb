class CreateFlashcardDeckReviews < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcard_deck_reviews do |t|
      t.references :user, null: false, foreign_key: { to_table: :users, column: :user_id }
      t.references :flashcard_deck, null: false, foreign_key: { to_table: :flashcard_decks, column: :flashcard_deck_id }

      t.integer :progress, null: false
      t.integer :review_status, null: false

      t.timestamps
    end
  end
end
