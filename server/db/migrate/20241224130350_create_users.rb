class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :uid, null: false
      t.string :name, null: false
      t.string :email, null: false
      t.string :provider, null: false

      # profile info 
      t.json :interests 
      t.string :avatar_id
      t.string :frame_id
      t.string :banner_id 
      t.string :tag_id

      # points and tokens
      t.integer :total_points
      t.integer :total_tokens
      t.integer :daily_points
      t.integer :daily_tokens 

      # streak
      t.integer :best_streak
      t.integer :current_streak

      # pomodoro settings
      t.time :settings_pomodoro_time 
      t.time :settings_pomodoro_break
      t.string :settings_ambient_music 
      t.string :settings_alarm_sound 
      t.integer :settings_reminder_status 
      t.time :settings_reminder_time

      t.timestamps
    end

    add_index :users, :uid, unique: true
    
  end
end
