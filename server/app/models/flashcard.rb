class Flashcard < ApplicationRecord
  belongs_to :flashcard_deck
  has_many :flashcard_reviews

  enum :type, { simple: 1, multiple_choice: 2, free: 3 }

  validates :type, :question, :answer, :order, presence: true 
end