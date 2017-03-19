require "rails_helper"
module CapybaraHelpers
  def register_user(first_name: 'shane', last_name: "chang", email: "schang@codingdojo.com")
    visit new_user_path unless current_path == new_user_path
    fill_in "user[username]", with: "shaneisgod"
    fill_in "user[email]", with: "schang@codingdojo.com"
    fill_in "user[password]", with: "password!"
    fill_in "user[password_confirmation]", with: "password!"
    click_button "Register"
  end

  def logout
    click_button "Log out"
  end
end
