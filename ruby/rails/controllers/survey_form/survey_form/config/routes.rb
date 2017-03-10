Rails.application.routes.draw do
  get 'surveys/new'

  post 'surveys/create'

  get 'surveys/profile'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
