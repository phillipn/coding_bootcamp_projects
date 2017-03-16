FactoryGirl.define do
  factory :todo do
    user
    content "MyString"
    due_date "2017-03-16"
    is_completed false
  end
end
