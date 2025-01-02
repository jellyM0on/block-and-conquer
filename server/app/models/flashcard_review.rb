class FlashcardReview < ApplicationRecord
  belongs_to :flashcard_review
  belongs_to :flashcard

  enum :state, { not_learned: 0, learning: 1, review: 2, relearning: 3 }

  validates :date_due, :stability, :difficulty, :scheduled_days, :reps, :lapses, :state, presence: true 
end