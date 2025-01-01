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

ActiveRecord::Schema[8.0].define(version: 2024_12_26_165149) do
  create_table "conquest_progs", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "conquest_id", null: false
    t.integer "progress", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["conquest_id"], name: "index_conquest_progs_on_conquest_id"
    t.index ["user_id"], name: "index_conquest_progs_on_user_id"
  end

  create_table "conquests", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.text "description", null: false
    t.string "reward", null: false
    t.integer "progress_increment", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "daily_reviews", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.integer "sessions", null: false
    t.integer "points", null: false
    t.integer "tokens", null: false
    t.integer "breaks", null: false
    t.time "time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_daily_reviews_on_user_id"
  end

  create_table "flashcard_deck_comments", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "flashcard_deck_id", null: false
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flashcard_deck_id"], name: "index_flashcard_deck_comments_on_flashcard_deck_id"
    t.index ["user_id"], name: "index_flashcard_deck_comments_on_user_id"
  end

  create_table "flashcard_deck_reviews", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "flashcard_deck_id", null: false
    t.integer "progress", null: false
    t.integer "review_status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flashcard_deck_id"], name: "index_flashcard_deck_reviews_on_flashcard_deck_id"
    t.index ["user_id"], name: "index_flashcard_deck_reviews_on_user_id"
  end

  create_table "flashcard_decks", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.integer "type", null: false
    t.integer "subject", null: false
    t.integer "privacy_status", null: false
    t.json "tags"
    t.integer "last_edited_by"
    t.integer "views"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_flashcard_decks_on_user_id"
  end

  create_table "flashcard_reviews", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "flashcard_deck_review_id", null: false
    t.bigint "flashcard_id", null: false
    t.timestamp "date_due", null: false
    t.integer "stability", null: false
    t.integer "difficulty", null: false
    t.integer "scheduled_days", null: false
    t.integer "reps", null: false
    t.integer "lapses", null: false
    t.integer "state", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flashcard_deck_review_id"], name: "index_flashcard_reviews_on_flashcard_deck_review_id"
    t.index ["flashcard_id"], name: "index_flashcard_reviews_on_flashcard_id"
  end

  create_table "flashcards", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "flashcard_deck_id", null: false
    t.integer "type", null: false
    t.text "question", null: false
    t.text "answer", null: false
    t.integer "order", null: false
    t.text "choices"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flashcard_deck_id"], name: "index_flashcards_on_flashcard_deck_id"
  end

  create_table "friends", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_1_id", null: false
    t.bigint "user_2_id", null: false
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_1_id"], name: "index_friends_on_user_1_id"
    t.index ["user_2_id"], name: "index_friends_on_user_2_id"
  end

  create_table "profile_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.integer "type", null: false
    t.integer "price", null: false
    t.integer "style", null: false
    t.string "reference", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sites", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "site_url"
    t.integer "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_sites_on_user_id"
  end

  create_table "todo_list_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "description", null: false
    t.json "tags"
    t.timestamp "due_date"
    t.integer "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_todo_list_items_on_user_id"
  end

  create_table "user_profile_items", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "profile_item_id", null: false
    t.bigint "user_id", null: false
    t.integer "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_item_id"], name: "index_user_profile_items_on_profile_item_id"
    t.index ["user_id"], name: "index_user_profile_items_on_user_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "uid", null: false
    t.string "name", null: false
    t.string "email", null: false
    t.string "provider", null: false
    t.json "interests"
    t.integer "total_points"
    t.integer "total_tokens"
    t.integer "best_streak"
    t.integer "current_streak"
    t.time "settings_pomodoro_time"
    t.time "settings_pomodoro_break"
    t.string "settings_ambient_music"
    t.string "settings_alarm_sound"
    t.integer "settings_reminder_mode"
    t.time "settings_reminder_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uid"], name: "index_users_on_uid", unique: true
  end

  add_foreign_key "conquest_progs", "conquests"
  add_foreign_key "conquest_progs", "users"
  add_foreign_key "daily_reviews", "users"
  add_foreign_key "flashcard_deck_comments", "flashcard_decks"
  add_foreign_key "flashcard_deck_comments", "users"
  add_foreign_key "flashcard_deck_reviews", "flashcard_decks"
  add_foreign_key "flashcard_deck_reviews", "users"
  add_foreign_key "flashcard_decks", "users"
  add_foreign_key "flashcard_reviews", "flashcard_deck_reviews"
  add_foreign_key "flashcard_reviews", "flashcards"
  add_foreign_key "flashcards", "flashcard_decks"
  add_foreign_key "friends", "users", column: "user_1_id"
  add_foreign_key "friends", "users", column: "user_2_id"
  add_foreign_key "sites", "users"
  add_foreign_key "todo_list_items", "users"
  add_foreign_key "user_profile_items", "profile_items"
  add_foreign_key "user_profile_items", "users"
end
