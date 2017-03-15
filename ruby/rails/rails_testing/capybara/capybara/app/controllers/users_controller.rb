class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Welcome, #{@user.first_name}"
      redirect_to user_path(@user)
    else
      render users_new_path
    end
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email)
  end
end
