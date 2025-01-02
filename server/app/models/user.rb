class User < ApplicationRecord

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

  enum :settings_reminder_mode, { disabled: 0, enabled: 1 }

  validates :uid, :name, :email, :provider, presence: true 
  validates :name, length: { in: 1..200 }

  def pomodoro_statistics 
    monthly_reviews =  daily_reviews.select(:time, :created_at).group_by { |dr| dr.created_at.strftime("%m-%Y") }.as_json(except: :id)
    
    {
      monthly_reviews: monthly_reviews,
      total_sessions: daily_reviews.sum(:sessions),
      total_breaks: daily_reviews.sum(:breaks),
      total_hours: (daily_reviews.sum(:time)/3600),
      current_breaks: daily_reviews.last&.breaks || 0, 
      current_sessions: daily_reviews.last&.sessions || 0, 
      current_hours: (daily_reviews.last&.time)/3600 || 0
    }
  end

  # formatting
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