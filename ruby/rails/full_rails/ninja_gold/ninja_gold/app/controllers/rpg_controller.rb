class RpgController < ApplicationController
  def index
    if !session[:money]
      session[:money] = 0
    end
    if !session[:messages]
      session[:messages] = []
    end
  end

  def process_money
    location = params[:building]

    if location == 'farm'
      amount = rand(10..20)
      session[:money] += amount
      session[:messages].push "You have earned #{amount} from the #{location}"
    elsif location == 'cave'
      amount = rand(5..10)
      session[:money] +=  amount
      session[:messages].push "You have earned #{amount} from the #{location}"
    elsif location == 'house'
      amount = rand(2..5)
      session[:money] += amount
      session[:messages].push "You have earned #{amount} from the #{location}"
    elsif location == 'casino'
      amount = rand(-50..50)
      session[:money] += amount
      session[:messages].push "You have earned #{amount} from the #{location}"
    end

    redirect_to action: 'index'
  end
end
