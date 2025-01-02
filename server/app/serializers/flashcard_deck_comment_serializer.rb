class FlashcardDeckCommentSerializer < ActiveModel::Serializer
  attributes :name, 
  :text, 
  :created_at
  
  def name
    object.user.name
  end
  
end