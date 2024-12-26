class User < ApplicationRecord

  has_many :user_profile_items, dependent: :destroy
  has_many :todo_list_items, dependent: :destroy
  has_many :flashcard_decks, dependent: :destroy
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

end