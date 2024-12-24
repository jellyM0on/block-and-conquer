class Flashcard < ApplicationRecord

  belongs_to :flashcard_deck, foreign_key: "flashcard_deck_id"

  # enum :type, { mixed: 0, simple: 1, multiple_choice: 2, free: 3}

  # validates :uid, :name, :email, :provider, presence: true 
end