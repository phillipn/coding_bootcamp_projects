require 'rails_helper'
feature "can create messages" do
  before :each do
    visit root_path
  end

  scenario "redirected if not logged in" do
    expect(page).to have_current_path(new_user_path)
  end

  scenario "error message if no message content" do
    register_user
    click_button 'Submit'
    expect(page).to have_current_path(root_path)
    expect(page).to have_content('Message has to be at least 10 characters')
  end

  scenario "successfully create messages" do
    register_user
    fill_in('message[message]', with: 'I hate this web site')
    click_button 'Submit'
    expect(page).to have_content('I hate this web site')
    expect(page).to have_current_path(root_path)
  end
end
