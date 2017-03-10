class GreetingsController < ApplicationController
  def index
    render text: 'What do you want me to say?'
  end

  def hello
    render text: 'Hello Coding Dojo'
  end

  def times
    if session['times']
      session['times'] += 1
    else
      session['times'] = 1
    end
    render text: "Times: #{session['times']}"
  end

  def restart
    session['times'] = 0
    render text: "Destroyed your beloved session"
  end

  def say
    render text: 'Saying hello'
  end

  def say_joe
    render text: 'Saying hello to Joe'
  end

  def tell_off
    redirect_to action: 'say_joe'
  end
end
