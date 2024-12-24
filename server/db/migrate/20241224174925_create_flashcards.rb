class CreateFlashcards < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcards do |t|
      t.integer :flashcard_deck_id, null: false 
      t.integer :type, null: false 

      t.text :question, null: false
      t.text :answer, null: false
      t.text :choices

      t.integer :order 
      t.timestamp :last_reviewed
      t.timestamp :date_due 
      t.string :stability
      t.string :difficulty 
      t.json :scheduled_days 
      t.integer :repetitions 
      t.integer :lapses
      t.string :state





      t.timestamps
    end
  end
end
