require 'rails_helper'

RSpec.describe Message, type: :model do
  it 'should require a message of length 10' do
    expect(build(:message, message: 'too short')).to be_invalid
  end
  it 'should require a user' do
    expect(build(:message, user: nil)).to be_invalid
  end
end
