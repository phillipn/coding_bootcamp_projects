class UsersController < ApplicationController
  # REGISTER ROUTE
  def new
    @user = User.new
  end

  # LOGIN ROUTE
  def login
  end

  def create
  end
end
