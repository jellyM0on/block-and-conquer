class FlashcardDeckWithCardsSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :description,
  :subject, 
  :tags, 
  :privacy_status
  
  has_many :flashcards, serializer: FlashcardSerializer
  
end