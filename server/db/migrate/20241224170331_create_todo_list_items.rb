class CreateTodoListItems < ActiveRecord::Migration[8.0]
  def change
    create_table :todo_list_items do |t|
      t.integer :user_id, null: false 
      t.string :description, null: false
      t.json :tags
      t.timestamp :due_date
      t.integer :status, null: false

      t.timestamps
    end
  end
end
