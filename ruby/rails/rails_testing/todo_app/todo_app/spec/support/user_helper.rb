require 'rails_helper'
module CapybaraHelpers

  def register(email:'phillipn@gmail.com', password:'phillipn', password_confirmation:'phillipn')
    visit new_user_path unless current_path == new_user_path
    fill_in "user[email]", with: email
    fill_in "user[password]", with: password
    fill_in "user[password_confirmation]", with: password_confirmation
    click_button "Register"
  end

  def login(email:'phillipn@gmail.com', password:'phillipn')
    register
    logout
    visit users_login_path unless current_path == users_login_path
    fill_in "email", with: email
    fill_in "password", with: password
    click_button "Login"
  end

  def logout
    click_link "Log out"
  end

  def populate_todo(content: 'Do stuff', due_date: '2017-03-22')
    fill_in 'todo[content]', with: content
    fill_in 'todo[due_date]', with: due_date
    click_button 'Submit'
  end


end
