Rails.application.routes.draw do
  root 'messages#index'

  get 'users/login' => 'users#login'
  resources :users, only: [:new, :create]

  resources :messages,  only: [:index, :create] do
    resources :comments, only: [:create]
  end

end
