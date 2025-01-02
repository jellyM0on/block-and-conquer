Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  # 
  get 'test/index', to: 'test#index'
  post 'auth/sign_up', to: 'auth#sign_up'

  scope :api do
    resources :users do 
      member do 
        get :show_daily_reviews, path: "pomodoro_reviews"
        put :update_pomodoro_settings, path: "pomodoro_settings"
      end

      resources :flashcard_decks
    end
  end

end
