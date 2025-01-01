class UserProfileItem < ApplicationRecord
  belongs_to :user
  belongs_to :profile_item

  validates :status, presence: true 

  enum :status, { inactive: 0, current_avatar: 1, current_frame: 2, current_banner: 3, current_tag: 4 }
end