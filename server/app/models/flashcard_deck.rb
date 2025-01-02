class FlashcardDeck < ApplicationRecord
  belongs_to :user
  has_many :flashcards, dependent: :destroy
  has_many :flashcard_deck_reviews, dependent: :destroy
  has_many :flashcard_deck_comments, dependent: :destroy

  validates :name, :description, :deck_type, :subject, :privacy_status, presence: true 

  enum :deck_type, { mixed: 0, simple: 1, multiple_choice: 2, free: 3}
  enum :privacy_status, { public_all: 0, private_user: 1, draft: 2 }
  enum :subject, { other: 0, computer: 1, science: 2, language: 3, mathematics: 4, history: 5 }

 
end