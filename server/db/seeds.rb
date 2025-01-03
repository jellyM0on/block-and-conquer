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
FlashcardDeck.destroy_all
Flashcard.destroy_all
FlashcardReview.destroy_all
FlashcardDeckReview.destroy_all

user = User.create(
  uid: "vZgSBQc37wfA643fimIg2P6njU23", 
  name: "Docker Rey", 
  email: "docker2rey@gmail.com", 
  provider: "google.com", 
  interests: ["Computer Science", "Literature"],
  total_points: 100,
  total_tokens: 100,
  best_streak: 7,
  current_streak: 1,
  total_sessions: 10, 
  total_breaks: 10, 
  total_time: 10,
  settings_pomodoro_time: "00:25:00",
  settings_pomodoro_break: "00:05:00",
  settings_ambient_music: "lofi",
  settings_alarm_sound: "chime",
  settings_reminder_mode: "enabled",
  settings_reminder_time: "00:05:00"
)

user2 = User.create(
  uid: "6U1nvzo2rQY1SuFBhInPFkiZWvz2", 
  name: "Test User", 
  email: "test@mail.com", 
  provider: "password", 
  interests: ["Computer Science", "Literature"],
  total_points: 100,
  total_tokens: 100,
  best_streak: 7,
  current_streak: 1,
  total_sessions: 10, 
  total_breaks: 10, 
  total_time: 10,
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

flashcard_deck = FlashcardDeck.create(
  user_id: user.id,
  name: "Sample Deck",
  description: "This is a sample flashcard deck.",
  deck_type: "simple", 
  subject: "computer", 
  privacy_status: "public_all", 
  tags: ["math", "algebra"],
  views: 5,
  total_flashcards: 1
)

flashcard = Flashcard.create(
  flashcard_deck_id: flashcard_deck.id,
  card_type: "simple", 
  question: "What is 2 + 2?",
  answer: "4",
  order: 1,
)

flashcard_deck_review = FlashcardDeckReview.create!(
  user_id: user.id,
  flashcard_deck_id: flashcard_deck.id,
  progress: 0, 
  review_status: "to_review", 
)

flashcard_review = FlashcardReview.create(
  flashcard_deck_review_id: flashcard_deck_review.id,
  flashcard_id: flashcard.id,
  date_due: 2.days.from_now,
  stability: 70,
  difficulty: 3,
  scheduled_days: 2,
  reps: 1,
  lapses: 0,
  state: "not_learned",
)

# user 2 test deck
flashcard_deck2 = FlashcardDeck.create(
  user_id: user2.id,
  name: "Sample Deck 2",
  description: "This is a sample flashcard deck.",
  deck_type: "simple", 
  subject: "computer", 
  privacy_status: "public_all", 
  tags: ["math", "algebra"],
  views: 5,
  total_flashcards: 1
)

flashcard_2 = Flashcard.create(
  flashcard_deck_id: flashcard_deck2.id,
  card_type: "simple", 
  question: "What is 2 + 2?",
  answer: "4",
  order: 1,
)
