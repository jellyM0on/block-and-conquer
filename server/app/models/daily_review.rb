class DailyReview < ApplicationRecord
  belongs_to :user

  validates :sessions, :points, :tokens, :breaks, :time, presence: true 

end