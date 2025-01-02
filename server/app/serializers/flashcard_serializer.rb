class FlashcardSerializer < ActiveModel::Serializer
  attributes :card_type, 
  :question, 
  :answer, 
  :order
  
end