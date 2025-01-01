class AuthController < ApplicationController
  before_action :verify_auth

  def sign_up 
    puts @user_info.to_json
    user = User.new(
      uid: @user_info["user_id"], 
      email: @user_info["email"], 
      provider: @user_info["firebase"]["sign_in_provider"], 
      name: params[:name]
    )
    puts user.to_json

    if user.save
      render json: user, status: :ok
    else 
      render json: { errors: user.errors }, status: :bad_request
    end
  end

  private

end