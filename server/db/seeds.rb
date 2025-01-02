# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#   
User.destroy_all
DailyReview.destroy_all

user = User.create(
  uid: "vZgSBQc37wfA643fimIg2P6njU23", 
  name: "Docker Rey", 
  email: "docker2rey@gmail.com", 
  provider: "google.com", 
  interests: { 
    interests: ["Computer Science", "Literature"] 
  },
  total_points: 100,
  total_tokens: 100,
  best_streak: 7,
  current_streak: 1,
  settings_pomodoro_time: "00:25:00",
  settings_pomodoro_break: "00:05:00",
  settings_ambient_music: "lofi",
  settings_alarm_sound: "chime",
  settings_reminder_mode: "enabled",
  settings_reminder_time: "00:05:00"
)

DailyReview.create([
  {
    user_id: user.id,
    sessions: 4,
    points: 200,
    tokens: 20,
    breaks: 2,
    time: 3600
  }, 
  {
      user_id: user.id,
      sessions: 3,
      points: 150,
      tokens: 15,
      breaks: 1,
      time: 3600
  },
  {
    user_id: user.id,
    sessions: 3,
    points: 150,
    tokens: 15,
    breaks: 1,
    time: 3600
    },
])
