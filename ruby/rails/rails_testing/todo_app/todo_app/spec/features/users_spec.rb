require "rails_helper"

feature "registration" do
  scenario "successful registration" do
    register
    expect(page).to have_current_path(root_path)
    expect(page).to have_content('You are logged in')
  end

  scenario "password needs length 5" do
    register(password: 'ab', password_confirmation:'ab')
    expect(page).to have_content "Password is too short"
    expect(page).to have_current_path(new_user_path)
  end

  scenario "passwords don't match" do
    register(password: 'abcdef', password_confirmation:'abcdefg')
    expect(page).to have_content "Passwords do not match"
    expect(page).to have_current_path(new_user_path)
  end

  scenario "email not valid" do
    register(email: 'youknowme')
    expect(page).to have_content "Email is invalid"
    expect(page).to have_current_path(new_user_path)
  end
end

feature "login" do
  scenario "successful login" do
    login
    expect(page).to have_current_path(root_path)
    expect(page).to have_content('You are logged in')
  end

  scenario "unsuccessful login" do
    login(email: 'ab', password:'ab')
    expect(page).to have_content "Invalid Login"
    expect(page).to have_current_path(users_login_path)
  end
end
