class MessagesController < ApplicationController
  def index
    @messages = Message.all.includes(:comments)
    @message = Message.new
    @comment = Comment.new
  end

  def create
    @message = Message.new(message_params)
    @message.user_id = session[:user]['id']
    if @message.save
      redirect_to root_path
    else
      flash[:errors] = ["Message has to be at least 10 characters."]
      redirect_to root_path
    end
  end

  private
    def message_params
      params.require(:message).permit(:message)
    end
end
