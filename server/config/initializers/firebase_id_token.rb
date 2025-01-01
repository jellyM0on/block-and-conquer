require 'redis'

FirebaseIdToken.configure do |config|
  # Create a Redis instance with specific details
  config.redis = Redis.new(
    host: '127.0.0.1', # Replace with your Redis server's host
    port: 6379,       # Replace with your Redis server's port
  )

  # Set your Firebase project IDs (must be an Array)
  config.project_ids = ['block-conquer'] # Replace with your actual Firebase Project ID
end