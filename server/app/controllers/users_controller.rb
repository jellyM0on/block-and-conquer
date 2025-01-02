class UsersController < ApplicationController
  # before_action :verify_auth
  # before_action :set_current_user
  before_action :validate_pomodoro_settings_params, only: [ :update_pomodoro_settings ]

  def show_daily_reviews 
    user = User.find(params[:id])
    
    if user 
      render json: user, serializer: UserDailyReviewSerializer, status: :ok
    else 
      render json: { errors: user.errors }, status: :bad_request
    end
  end

  def update_pomodoro_settings
    user = User.find(params[:id])

    if user.update(@validated_pomodoro_settings_params)
      render json: user, serializer: UserPomodoroSettingsSerializer, status: :ok
    else 
      render json: { errors: user.errors }, status: :bad_request
    end

  end

  private 

  def validate_pomodoro_settings_params
    @validated_pomodoro_settings_params = params.require(:pomodoro_settings).permit(
      :settings_pomodoro_time, 
      :settings_pomodoro_break, 
      :settings_ambient_music, 
      :settings_alarm_sound, 
      :settings_reminder_mode, 
      :settings_pomodoro_time
    )
  end
end