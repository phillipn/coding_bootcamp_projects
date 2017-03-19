require 'rails_helper'
feature "user can logout" do
  scenario "logout page on screen" do
    register_user
    expect(page).to have_content('Log out')
  end

  scenario "redirected after logout" do
    register_user
    click_link 'Log out'
    expect(page).to have_current_path(users_login_path)
  end
end
