class TodoListItem < ApplicationRecord
  belongs_to :user

  validates :status, :description, presence: true 

  enum :status, { in_progress: 0, completed: 1 }
end