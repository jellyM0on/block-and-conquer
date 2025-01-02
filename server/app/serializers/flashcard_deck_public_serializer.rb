class FlashcardDeckPublicSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :subject, 
  :description,
  :views, 
  :user_name,

  def user_name
    object.user.name
  end
end