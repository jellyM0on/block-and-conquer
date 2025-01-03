class FlashcardReviewsController < ApplicationController
  before_action :validate_flashcard_review_params, only: [:update]

  def update
    flashcards = @validated_flashcard_review_params[:flashcards]

    flashcard_deck_review = FlashcardDeckReview
      .includes(:flashcard_reviews)
      .find_or_create_by(user_id: params[:user_id], flashcard_deck_id: params[:id]) do |x|
        x.user_id = params[:user_id]
        x.flashcard_deck_id = params[:id]
        x.progress = 0
        x.review_status = "to_review"
      end

    flashcards.each do |card|
      card_review = FlashcardReview.find_or_initialize_by(flashcard_id: card[:flashcard_id]) do |review|
        review.flashcard_deck_review_id = flashcard_deck_review.id
        review.date_due = card[:date_due]
        review.stability = card[:stability]
        review.difficulty = card[:difficulty]
        review.scheduled_days = card[:scheduled_days]
        review.reps = card[:reps]
        review.state = card[:state]
        review.lapses = card[:lapses]
      end

      if card_review.new_record?
        card_review.save
      else
        card_review.update(
          date_due: card[:date_due],
          stability: card[:stability],
          difficulty: card[:difficulty],
          scheduled_days: card[:scheduled_days],
          reps: card[:reps],
          state: card[:state],
          lapses: card[:lapses]
        )
        if card_review.errors.any?
          puts card_review.errors.full_messages
        end
      end
    end

    flashcard_deck_review.update(
      progress: get_progress(flashcard_deck_review),
      review_status: get_review_status(flashcard_deck_review)
    )
    render json: { review: flashcard_deck_review, cards: flashcard_deck_review.flashcard_reviews }, status: :ok
  end

  private

  def get_progress(flashcard_deck_review)
    unreviewed = flashcard_deck_review.flashcard_reviews.where(date_due: Date.current).count
    total_cards = FlashcardDeck.find(params[:id]).flashcards.count

    total_cards.positive? ? ((unreviewed.to_f / total_cards) * 100).abs : 0
  end

  def get_review_status(flashcard_deck_review)
    unreviewed = flashcard_deck_review.flashcard_reviews.where(date_due: Date.current).exists?
    unreviewed ? "in_progress" : "completed"
  end

  def validate_flashcard_review_params
    @validated_flashcard_review_params = params.require(:flashcard_review).permit(
      flashcards: [
        :flashcard_id,
        :date_due,
        :lapses,
        :stability,
        :difficulty,
        :scheduled_days,
        :reps,
        :state
      ]
    )
  end
end
