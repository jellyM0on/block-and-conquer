class User < ApplicationRecord

  # associations
  has_many :user_profile_items, dependent: :destroy
  has_many :todo_list_items, dependent: :destroy
  has_many :flashcard_decks, dependent: :destroy
  has_many :flashcard_deck_reviews, dependent: :destroy
  has_many :conquest_progs, dependent: :destroy
  has_many :daily_reviews, dependent: :destroy
  has_many :sites, dependent: :destroy

  has_many :friendships_1, class_name: "Friend", foreign_key: :user_1_id
  has_many :friendships_2, class_name: "Friend", foreign_key: :user_2_id
  has_many :friends, through: :friendships_1, source: :user_2
  has_many :friends, through: :friendships_2, source: :user_1

  has_many :flashcard_deck_comments, dependent: :destroy

  # enums 
  enum :settings_reminder_mode, { disabled: 0, enabled: 1 }

  # validations
  validates :uid, :name, :email, :provider, presence: true 
  validates :name, length: { in: 1..200 }

  # methods 
  def self.with_daily_reviews(user_id)
    user = User.find(user_id)
    monthly_reviews =  user.daily_reviews.select(:time, :created_at).group_by { |dr| dr.created_at.strftime("%m-%Y") }.as_json(except: :id)
    current_daily_review = user.daily_reviews.where(created_at: Date.today.all_day).order(created_at: :desc).limit(1).first

    current_reviews = {
      current_breaks: current_daily_review&.breaks || 0, 
      current_sessions: current_daily_review&.sessions || 0, 
      current_hours: (current_daily_review&.time)/3600 || 0
    }

    {
      user: user, 
      monthly_reviews: monthly_reviews,
      current_reviews: current_reviews 
    }
  end

  # formatting
  def format_total_time
    total_time/3600
  end

  def format_settings_pomodoro_time
    settings_pomodoro_time.strftime("%H:%M")
  end

  def format_settings_pomodoro_break
    settings_pomodoro_break.strftime("%H:%M")
  end

  def format_settings_reminder_time
    settings_reminder_time.strftime("%H:%M")
  end

end