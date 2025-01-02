class FlashcardDeckCommentsController < ApplicationController
  # before_action :verify_auth
  # before_action :set_current_user
  before_action :validate_flashcard_deck_comment_params, only: [ :create ]

  def create
    comment = FlashcardDeckComment.new(@validated_flashcard_deck_comment_params)
    comment.user_id = params[:user_id]
    comment.flashcard_deck_id = params[:flashcard_deck_id]
  
    if comment.save
      render json: { comment: ActiveModelSerializers::SerializableResource.new(comment, each_serializer: FlashcardDeckCommentSerializer ) },
      status: :created

    else 
      render json: { errors: comment.errors }, status: :bad_request
    end
  end

  private

  def validate_flashcard_deck_comment_params
    @validated_flashcard_deck_comment_params = params.require(:flashcard_deck_comment).permit(
      :text 
    )
  end

end