class DojosController < ApplicationController
  def index
    @dojos = Dojo.all
    fresh_when(@dojos)
    # render json: @dojos
  end

  def new
    @dojo = Dojo.new
  end

  def show
    @dojo = Dojo.find(params[:id])
  end

  def create
    @dojo = Dojo.new(dojo_params)
    if @dojo.save
      redirect_to dojos_path
    else
      render 'new'
    end
  end

  def edit
    @dojo = Dojo.find(params[:id])
  end

  def update
    @dojo = Dojo.find(params[:id])
    if @dojo.update(dojo_params)
      redirect_to dojos_path
    else
      redirect_to dojos_path
    end
  end

  def destroy
    dojo = Dojo.find(params[:id])
    dojo.destroy
    redirect_to dojos_path
  end

  private
    def dojo_params
      params.require(:dojo).permit(:branch, :street, :city, :state)
    end
end
