class FlashcardDeck < ApplicationRecord
  # associations
  belongs_to :user
  has_many :flashcards, dependent: :destroy
  has_many :flashcard_deck_reviews, dependent: :destroy
  has_many :flashcard_deck_comments, dependent: :destroy

  # validations
  validates :name, :description, :deck_type, :subject, :privacy_status, presence: true 

  # enums
  enum :deck_type, { mixed: 0, simple: 1, multiple_choice: 2, free: 3}
  enum :privacy_status, { public_all: 0, private_user: 1, draft: 2 }
  enum :subject, { other: 0, computer: 1, science: 2, language: 3, mathematics: 4, history: 5 }


  # methods
  def self.get_own_with_overview(user_id, page, limit)
    decks = FlashcardDeck
            .where(user_id: user_id)
            .order(:updated_at)
            .page(page ? page.to_i : 1)
            .per(limit || 6)
  
    {
      decks: decks, 
      pagination_meta: {
        current_page: decks.current_page,
        next_page: decks.next_page,
        total_pages: decks.total_pages,
        total_count: decks.total_count
      }
    }
  end
  
  def self.get_public_with_overview(user_id, page, limit)
    decks = FlashcardDeck
            .where.not(user_id: user_id)
            .order(:views)
            .page(page ? page.to_i : 1)
            .per(limit || 12)
  
    {
      decks: decks,
      pagination_meta: {
        current_page: decks.current_page,
        next_page: decks.next_page,
        total_pages: decks.total_pages,
        total_count: decks.total_count
      }
    }
  end
 
end