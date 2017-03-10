class SurveysController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      if !session['times']
        session['times'] = 1
      else
        session['times'] += 1
      end
      flash[:notice] = "Thanks for signing up! You have submitted this form #{session['times']} #{'time'.pluralize(session['times'])}" 
      redirect_to surveys_profile_url
    else
      render 'new'
    end
  end

  def profile
    @users = User.all
  end

  private
    def user_params
      params.require(:user).permit(:name, :language, :location, :comment)
    end
end
