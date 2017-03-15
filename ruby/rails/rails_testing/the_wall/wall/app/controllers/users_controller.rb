class UsersController < ApplicationController
  # REGISTER ROUTE
  def new
    @user = User.new
  end

  # LOGIN ROUTE
  def login
  end

  def login_create
    @user = User.where("username =? AND password =?", params[:username], params[:password])

    if @user.empty?
      flash[:errors] =  ["Invalid Login"]
      redirect_to users_login_path
    else
      flash[:notice] = ["You are logged in"]
      session[:user] = {id: @user[0].id, username: @user[0].username}
      redirect_to root_path
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = ['You are logged in']
      session[:user] = {id: @user.id, username: @user.username}
      redirect_to root_path
    else
      # flash[:errors] = ['Invalid registration']
      render 'new'
    end
  end

  def destroy
    session.clear
    redirect_to users_login_path
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
