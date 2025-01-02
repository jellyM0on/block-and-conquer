class FlashcardDeckUserSerializer < ActiveModel::Serializer
  attributes :id, 
  :name, 
  :tags, 
  :review_status, 
  :total_flashcards, 
  :unreviewed_flashcards, 
  :progress

  def review_status
    object.flashcard_deck_reviews.find_by(user_id: object.user.id).review_status
  end

  def total_flashcards 
    object.flashcards.count
  end

  def unreviewed_flashcards 
    object.flashcard_deck_reviews
    .joins(:flashcard_reviews)
    .where(user_id: object.user.id, flashcard_reviews: { date_due: DateTime.now })
    .count
  end

  def progress
    object.flashcard_deck_reviews.find_by(user_id: object.user.id).progress
  end
end