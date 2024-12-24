class TestController < ApplicationController
  before_action :verify_auth
  before_action :set_current_user

  def index
    render json: {user: @current_user}, status: :ok
  end
end