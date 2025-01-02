class FlashcardDecksController < ApplicationController
  # before_action :verify_auth
  # before_action :set_current_user
  before_action :validate_flashcard_deck_params, only: [ :create ]

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

  def show
    flashcard_deck = FlashcardDeck.find(params[:id])

    render json: { flashcard_deck: ActiveModelSerializers::SerializableResource.new(flashcard_deck, each_serializer: FlashcardDeckViewSerializer) }, 
      status: :ok
  end

  def create
    flashcard_deck = FlashcardDeck.new(@validated_flashcard_deck_params)
    flashcard_deck.user_id = params[:user_id]
    flashcard_deck.deck_type = "mixed"

    if(flashcard_deck.save)
      build_flashcards(flashcard_deck.id)
      render json: { flashcard_deck: ActiveModelSerializers::SerializableResource.new(flashcard_deck, each_serializer: FlashcardDeckCreateSerializer) }, 
        status: :created
    else 
      render json: flashcard_deck.errors, status: :bad_request
    end
  end

  def update
    
  end

  def destroy
    flashcard_deck = FlashcardDeck.find(params[:id])

    if(flashcard_deck.destroy)
      render json: { flashcard_deck: {id: flashcard_deck.id } }, status: :ok
    else 
      render json: { flashcard_deck: flashcard_deck.errors }, status: :bad_request
    end
  end

  private

  def validate_flashcard_deck_params
    @validated_flashcard_deck_params = params.require(:flashcard_deck).permit(
      :name, 
      :description,
      :subject, 
      :privacy_status,
      tags: [],
      flashcards: [:card_type, :question, :answer, :order]
    )
  end

  def build_flashcards(flashcard_deck)
    flashcards = params[:flashcards]

    if(flashcards.present?)
      flashcards.each do |card|
        puts card["question"].to_json
        card = Flashcard.new(
          flashcard_deck_id: flashcard_deck,
          card_type: card["card_type"], 
          question: card["question"],
          answer: card["answer"], 
          order: card["order"]
        )
        card.save
        if(card.errors)
          puts card.errors
        end
      end
    end
  end
 
  
end