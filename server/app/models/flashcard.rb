class Flashcard < ApplicationRecord
  belongs_to :flashcard_deck
  has_many :flashcard_reviews

  enum :card_type, { simple: 1, multiple_choice: 2, free: 3 }

  validates :card_type, :question, :answer, :order, presence: true 
end