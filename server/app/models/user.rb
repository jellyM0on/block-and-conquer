class User < ApplicationRecord

  has_many :todo_list_items, foreign_key: "user_id",  dependent: :destroy
  has_many :flashcard_decks, foreign_key: "user_id", dependent: :destroy

  enum :settings_reminder_status, { disabled: 0, enabled: 1 }

  validates :uid, :name, :email, :provider, presence: true 

# has many friends through friend_assignment 
end