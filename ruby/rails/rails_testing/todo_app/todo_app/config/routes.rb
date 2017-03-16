Rails.application.routes.draw do
  root 'todos#index'

  post 'todos' => 'todos#create'

  get 'todos/new' => 'todos#new'

  patch 'todos/:id' => 'todos#update'

  get 'users/login' => 'users#login'
  post 'users/login' => 'users#login_create'
  resources :users, only: [:new, :create, :destroy]
end
