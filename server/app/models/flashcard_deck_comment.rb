class FlashcardDeckComment < ApplicationRecord
  belongs_to :user
  belongs_to :flashcard_deck

  validates :text, presence: true 

end