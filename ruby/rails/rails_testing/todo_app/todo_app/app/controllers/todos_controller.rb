class TodosController < ApplicationController
  before_action :check_for_user

  def index
      @todo = Todo.new
      @todos = Todo.where('user_id =? AND is_completed =?', session[:user]['id'], false)
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.user_id = session[:user]['id']

    if @todo.save
      flash[:notice] = ["Todo created"]
    else
      flash[:errors] =  @todo.errors.full_messages
    end
    redirect_to root_path
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.is_completed = true
    @todo.save

    render json: {}
  end

  private
  def todo_params
    params.require(:todo).permit(:content, :due_date)
  end

  def check_for_user
    if !session[:user]
      flash[:notice] = ["Please log in."]
      redirect_to users_login_path
    end
  end

end
