Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'greetings#index'
  get 'hello' => 'greetings#hello'
  get 'times' => 'greetings#times'
  get 'times/restart' => 'greetings#restart' 
  get 'say/hello' => 'greetings#say'
  get 'say/hello/joe' => 'greetings#say_joe'
  get 'say/hello/:other' => 'greetings#tell_off'
end
