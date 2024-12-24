class ApplicationController < ActionController::API

  def verify_auth
    token = request.headers['Authorization']&.split(' ')&.last
    puts token 
    payload = FirebaseIdToken::Signature.verify(token)

    if payload.nil?
      render json: "Unauthorized", status: :unauthorized
      return 
    else 
      @user_info = payload
    end
  end

  def set_current_user
    @current_user = User.find_by(uid: @user_info["user_id"])
  end
end
