require "rails_helper"

feature "create page" do

  scenario "user is not logged in" do
    visit root_path
    expect(page).to have_current_path(users_login_path)
    expect(page).to have_content('Please log in.')
  end

  scenario "valid todo" do
    register
    populate_todo
    expect(page).to have_current_path(root_path)
    expect(page).to have_content('Do stuff')
  end

  scenario "empty content" do
    register
    populate_todo(content: "", due_date: "2017-03-22")
    expect(page).to have_current_path(root_path)
    expect(page).to have_content("Content can't be blank")
  end

  scenario "due date before today" do
    register
    populate_todo(content: "", due_date: "2017-03-12")
    expect(page).to have_current_path(root_path)
    expect(page).to have_content("Due date must be on or after")
  end

  scenario "due date is blank" do
    register
    populate_todo(content: "Do stuff", due_date: "")
    expect(page).to have_current_path(root_path)
    expect(page).to have_content("Due date can't be blank")
    expect(page).to have_content("Due date is not a valid date")
  end

  scenario "hide checked todo item when you click on the height button" do
    register
    3.times { |i| populate_todo(content: "todo#{i}") }
    expect(page).to have_content("todo0")
    check '1cb'
    expect(page).to have_current_path(root_path)
    expect(page).not_to have_content("todo0")
  end
end

# feature "index page" do
#   scenario "successful registration" do
#     register
#     expect(page).to have_current_path(root_path)
#     expect(page).to have_content('You are logged in')
#   end
# end
