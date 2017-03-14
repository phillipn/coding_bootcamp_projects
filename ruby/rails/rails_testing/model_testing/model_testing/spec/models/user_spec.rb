require 'rails_helper'
RSpec.describe User do
  context "With valid attributes" do
    it "should save" do
      expect(build(:user)).to be_valid
    end
  end

  context "With invalid attributes" do
    it "should not save if first_name field is blank" do
      expect(build(:user, first_name:'')).to be_invalid
    end

    it "should not save if last_name field is blank" do
      expect(build(:user, last_name:'')).to be_invalid
    end

    it "should not save if email already exists" do
      user = User.create(first_name: 'Nick', last_name: 'Phillips', email: 'phillipn@purdue.edu')
      user2 = User.create(first_name: 'Zack', last_name: 'Phillips', email: 'phillipn@purdue.edu')
      expect(user2).to be_invalid
    end

    it "should contain a valid email" do
      expect(build(:user, email:'phil')).to be_invalid
    end
  end
end
