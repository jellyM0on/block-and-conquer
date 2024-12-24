class User < ApplicationRecord
  validates :uid, :name, :email, :provider, presence: true 

end