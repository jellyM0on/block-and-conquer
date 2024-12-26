class Conquest < ApplicationRecord
  has_many :conquest_progs

  validates :description, :reward, :progress_increment, presence: true 

end