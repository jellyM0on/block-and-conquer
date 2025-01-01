class ConquestProg < ApplicationRecord
  belongs_to :user
  belongs_to :conquest

  validates :progress, presence: true 

end