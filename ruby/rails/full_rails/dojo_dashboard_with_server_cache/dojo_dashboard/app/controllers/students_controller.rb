class StudentsController < ApplicationController
  before_action :get_dojo, only: [:new, :create, :update, :edit, :show]
  before_action :get_student, only: [:edit, :show, :update, :destroy]

  def new
    @student = Student.new()
  end

  def create
    @student= Student.new(student_params)
    @student.dojo = Dojo.find(params[:student][:dojo])

    if @student.save
      redirect_to dojo_path(@student.dojo)
    else
      @student.errors.messages
      render 'new'
    end
  end

  def update
    @student.dojo = Dojo.find(params[:student][:dojo])
    if @student.update(student_params)
      redirect_to dojo_path(@student.dojo)
      # redirect_to [@student.dojo, @student]
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @student.destroy
    redirect_to dojo_path(params[:dojo_id])
  end

  def show
  end

  private
    def student_params
      params.require(:student).permit(:first_name, :last_name, :email)
    end

    def get_dojo
      @dojo = Dojo.find(params[:dojo_id])
    end

    def get_student
      @student= Student.find(params[:id])
    end
end
