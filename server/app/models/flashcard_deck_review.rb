class FlashcardDeckReview < ApplicationRecord
  belongs_to :user
  belongs_to :flashcard_deck
  has_many :flashcard_reviews, dependent: :destroy

  enum :review_status, { to_review: 1, in_progress: 2, completed: 3 }

  validates :progress, :review_status, presence: true 
end