class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :provider, null: false

      # profile info 
      t.json :interests 

      # points and tokens
      t.integer :total_points
      t.integer :total_tokens

      # streak
      t.integer :best_streak
      t.integer :current_streak

      # pomodoro statistics
      t.integer :total_sessions
      t.integer :total_breaks
      t.integer :total_time

      # pomodoro settings
      t.time :settings_pomodoro_time 
      t.time :settings_pomodoro_break
      t.string :settings_ambient_music 
      t.string :settings_alarm_sound 
      t.integer :settings_reminder_mode
      t.time :settings_reminder_time

      t.timestamps
    end

    add_index :users, :uid, unique: true
    
  end
end
