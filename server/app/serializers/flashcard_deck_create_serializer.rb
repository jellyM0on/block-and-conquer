class FlashcardDeckCreateSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :tags, 
  :total_flashcards
  
  has_many :flashcard_deck_reviews, serializer: FlashcardDeckReviewSerializer
  
end