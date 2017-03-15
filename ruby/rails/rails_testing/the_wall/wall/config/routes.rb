Rails.application.routes.draw do
  root 'messages#index'

  get 'users/login' => 'users#login'
  post 'users/login' => 'users#login_create'

  resources :users, only: [:new, :create, :destroy]

  resources :messages,  only: [:index, :create] do
    resources :comments, only: [:create]
  end

end
