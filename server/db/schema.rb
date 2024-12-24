# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2024_12_24_174925) do
  create_table "flashcard_decks", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.json "tags"
    t.string "progress"
    t.integer "type", null: false
    t.string "subject", null: false
    t.integer "published_status", null: false
    t.timestamp "last_reviewed"
    t.integer "privacy_status", null: false
    t.integer "last_edited_by"
    t.integer "views"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "flashcards", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "flashcard_deck_id", null: false
    t.integer "type", null: false
    t.text "question", null: false
    t.text "answer", null: false
    t.text "choices"
    t.integer "order"
    t.timestamp "last_reviewed"
    t.timestamp "date_due"
    t.string "stability"
    t.string "difficulty"
    t.json "scheduled_days"
    t.integer "repetitions"
    t.integer "lapses"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "todo_list_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "description", null: false
    t.json "tags"
    t.timestamp "due_date"
    t.integer "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "uid", null: false
    t.string "name", null: false
    t.string "email", null: false
    t.string "provider", null: false
    t.json "interests"
    t.string "avatar_id"
    t.string "frame_id"
    t.string "banner_id"
    t.string "tag_id"
    t.integer "total_points"
    t.integer "total_tokens"
    t.integer "daily_points"
    t.integer "daily_tokens"
    t.integer "best_streak"
    t.integer "current_streak"
    t.time "settings_pomodoro_time"
    t.time "settings_pomodoro_break"
    t.string "settings_ambient_music"
    t.string "settings_alarm_sound"
    t.integer "settings_reminder_status"
    t.time "settings_reminder_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end
end
