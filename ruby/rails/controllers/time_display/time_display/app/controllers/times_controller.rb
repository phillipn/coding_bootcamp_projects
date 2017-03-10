class TimesController < ApplicationController
  def main
    puts 'here'
    @time = Time.current.strftime("%b %d %Y %H:%M:%S")
    puts @time
  end
end
