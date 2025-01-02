class FlashcardDecksController < ApplicationController
  # before_action :verify_auth
  # before_action :set_current_user

  def index 
    user_decks = FlashcardDeck
      .includes(:flashcards, flashcard_deck_reviews: :flashcard_reviews)
      .where(user_id: params[:user_id])
      .order(:updated_at)
      .page(params[:page] ? params[:page].to_i: 1)
      .per(params[:limit] || 6)

    public_decks = FlashcardDeck
    .where.not(user_id: params[:user_id])
    .order(:views)
    .page(params[:page] ? params[:page].to_i: 1)
    .per(params[:limit] || 12)
  
    render json: { 
      user_decks: ActiveModelSerializers::SerializableResource.new(user_decks, each_serializer: FlashcardDeckUserSerializer), 
      user_decks_pagination_meta: pagination_meta(user_decks), 
      public_decks: ActiveModelSerializers::SerializableResource.new(public_decks, each_serializer: FlashcardDeckPublicSerializer), 
      public_decks_pagination_meta: pagination_meta(public_decks),  
    }, status: :ok
  
  end

  private 

  def pagination_meta(decks) {
    current_page: decks.current_page,
    next_page: decks.next_page,
    total_pages: decks.total_pages,
    total_count: decks.total_count
  }
  end
  
end