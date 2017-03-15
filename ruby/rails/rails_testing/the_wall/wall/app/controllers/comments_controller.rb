class CommentsController < ApplicationController
  def create
    flash[:errors] =[]
    @comment = Comment.new(comment_params)
    @comment.user_id = session[:user]['id']
    @comment.message_id = params[:message_id]

    if @comment.save
      redirect_to root_path
    else
      flash[:errors] = ["Comment cannot be empty."]
      redirect_to root_path
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:comment)
    end
end
