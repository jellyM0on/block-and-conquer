class FlashcardDecksController < ApplicationController
  # before_action :verify_auth
  # before_action :set_current_user

  def index
    user_decks = FlashcardDeck.get_own_with_overview(params[:user_id], params[:page], params[:limit])
    public_decks = FlashcardDeck.get_public_with_overview(params[:user_id], params[:page], params[:limit])
  
    render json: {
      user_decks: {
        decks: ActiveModelSerializers::SerializableResource.new(user_decks[:decks], each_serializer: FlashcardDeckUserSerializer),
        pagination_meta: user_decks[:pagination_meta]
      },
      public_decks: {
        decks: ActiveModelSerializers::SerializableResource.new(public_decks[:decks], each_serializer: FlashcardDeckPublicSerializer),
        pagination_meta: public_decks[:pagination_meta]
      }
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