class ProfileItem < ApplicationRecord
  has_many :user_profile_items, dependent: :destroy

  enum :profile_type, { avatar: 0, banner: 1, frame: 2, tag: 3 }
  enum :style, { minimalist: 0, fantasy: 1, futuristic: 2, quirky: 3 }

  validates :profile_type, :price, :style, :reference, presence: true 

end