class CreateFlashcardReviews < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcard_reviews do |t|
      t.references :flashcard_deck_review, null: false, foreign_key: { to_table: :flashcard_deck_reviews, column: :flashcard_deck_review_id }
      t.references :flashcard, null: false, foreign_key: { to_table: :flashcards, column: :flashcard_id }

      t.timestamp :date_due, null: false 
      t.integer :stability, null: false
      t.integer :difficulty, null: false
      t.integer :scheduled_days, null: false
      t.integer :reps, null: false
      t.integer :lapses, null: false 
      t.integer :state, null: false 

      t.timestamps
    end
  end
end
