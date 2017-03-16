require 'rails_helper'

RSpec.describe Todo, type: :model do
  context 'Valid Todo' do
    it { expect(build(:todo)).to be_valid }
  end

  context 'Invalid Todo' do
    it 'content cannot be blank' do
      expect(build(:todo, content: "")).to be_invalid
    end
    it 'due date cannot be blank' do
      expect(build(:todo, due_date: "")).to be_invalid
    end
    it 'due date has to be after today' do
      expect(build(:todo, due_date: "2017-03-12")).to be_invalid
    end
    it 'has to belong to a valid user' do
      expect(build(:todo, user_id: "")).to be_invalid
    end
  end
end
