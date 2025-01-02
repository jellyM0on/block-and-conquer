class FlashcardDeckReviewSerializer < ActiveModel::Serializer
  attributes :progress, 
  :review_status, 
  :unreviewed_cards

  def unreviewed_cards
   object.get_unreviewed_cards
  end
end