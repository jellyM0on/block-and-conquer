class FlashcardDeckViewSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :description,
  :subject, 
  :tags, 
  :privacy_status, 
  :views
  
  has_many :flashcard_deck_reviews, serializer: FlashcardDeckReviewSerializer
  has_many :flashcards, serializer: FlashcardSerializer
  has_many :flashcard_deck_comments, serializer: FlashcardDeckCommentSerializer
  
end