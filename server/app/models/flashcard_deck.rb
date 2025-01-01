class FlashcardDeck < ApplicationRecord
  belongs_to :user
  has_many :flashcards, dependent: :destroy
  has_many :flashcard_deck_reviews, dependent: :destroy
  has_many :flashcard_deck_comments, dependent: :destroy

  validates :name, :description, :type, :subject, :privacy_status, presence: true 

  enum :type, { mixed: 0, simple: 1, multiple_choice: 2, free: 3}
  enum :published_status, { n_published: 0, published: 1 }
  enum :privacy_status, { public: 0, private: 1 }
  enum :subject, { other: 0, computer: 1, science: 2, language: 3, mathematics: 4, history: 5 }

end