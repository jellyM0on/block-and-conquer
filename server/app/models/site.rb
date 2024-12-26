class Site < ApplicationRecord

  belongs_to :user

  enum :status, { disabled: 0, enabled: 1 }

  validates :site_url, :status, presence: true 

end