require 'rails_helper'
feature "User registers" do
  before(:each) do
    visit new_user_path
  end

  scenario "successfully creates a new user account" do
    fill_in "user[username]", with: "shaneisgod"
    fill_in "user[email]", with: "schang@codingdojo.com"
    fill_in "user[password]", with: "password!"
    fill_in "user[password_confirmation]", with: "password!"
    click_button "Register"
    expect(page).to have_content "Hello, shaneisgod"
    expect(page).to have_current_path(root_path)
  end

  scenario "no success without username of length 6" do
    fill_in "user[username]", with: "shane"
    fill_in "user[email]", with: "schang@codingdojo.com"
    fill_in "user[password]", with: "password!"
    fill_in "user[password_confirmation]", with: "password!"
    click_button "Register"
    expect(page).to have_content "Username is too short"
    expect(page).to have_current_path(new_user_path)
  end

  scenario "no success without any special characters in password" do
    fill_in "user[username]", with: "shaneisgod"
    fill_in "user[email]", with: "schang@codingdojo.com"
    fill_in "user[password]", with: "password"
    fill_in "user[password_confirmation]", with: "password"
    click_button "Register"
    expect(page).to have_content "Password is invalid"
    expect(page).to have_current_path(new_user_path)
  end

  scenario "no success without any matching passwords" do
    fill_in "user[username]", with: "shane"
    fill_in "user[email]", with: "schang@codingdojo.com"
    fill_in "user[password]", with: "password!"
    fill_in "user[password_confirmation]", with: "passw"
    click_button "Register"
    expect(page).to have_content "Passwords must match"
    expect(page).to have_current_path(new_user_path)
  end
end
