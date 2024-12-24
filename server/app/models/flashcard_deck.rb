class FlashcardDeck < ApplicationRecord

  belongs_to :user, foreign_key: "user_id"

  has_many :flashcards, foreign_key: "flashcard_deck_id"

  enum :type, { mixed: 0, simple: 1, multiple_choice: 2, free: 3}
  enum :published_status, { n_published: 0, published: 1 }
  enum :privacy_status, { public: 0, private: 1 }

  # validates :uid, :name, :email, :provider, presence: true 
end