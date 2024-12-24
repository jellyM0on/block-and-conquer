class CreateFlashcardDecks < ActiveRecord::Migration[8.0]
  def change
    create_table :flashcard_decks do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.text :description, null: false 
      t.json :tags
      t.string :progress
      t.integer :type, null: false 
      t.string :subject, null: false 
      t.integer :published_status, null: false 
      t.timestamp :last_reviewed
      t.integer :privacy_status, null: false 
      t.integer :last_edited_by 
      t.integer :views 

      t.timestamps
    end
  end
end
