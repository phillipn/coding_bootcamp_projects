Rails.application.routes.draw do
  get 'users/new'
  post 'users' => 'users#create'
  get 'users/:id' => 'users#show', as: :user
end
