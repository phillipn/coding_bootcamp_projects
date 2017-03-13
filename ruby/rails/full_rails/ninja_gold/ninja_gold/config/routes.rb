Rails.application.routes.draw do
  get '/rpg/index' => 'rpg#index'
  post '/process_money' => 'rpg#process_money'
end
