class Friend < ApplicationRecord

  belongs_to :user_1, class_name: "User"
  belongs_to :user_2, class_name: "User"


  enum :status, { pending: 0, accepted: 1, declined: 2 }

  validates :status, presence: true 

end