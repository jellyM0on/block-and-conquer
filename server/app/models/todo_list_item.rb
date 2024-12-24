class TodoListItem < ApplicationRecord
  belongs_to :user, foreign_key: "user_id"

  enum :status, { in_progress: 0, completed: 1 }
end