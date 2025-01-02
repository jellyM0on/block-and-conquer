class FlashcardDeckPublicSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :subject, 
  :description,
  :views, 
  :user_name,
  :total_flashcards, 
  
  def total_flashcards 
    object.flashcards.count
  end

  def user_name
    object.user.name
  end
end