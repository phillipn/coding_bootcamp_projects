require 'rails_helper'

RSpec.describe User, type: :model do
  it 'should require username' do
    expect(build(:user, username: '')).to be_invalid
  end
  it 'should require a long username' do
    expect(build(:user, username: 'guy')).to be_invalid
  end
  it 'should require a unique username' do
    create(:user, username: 'phillipn')
    expect(build(:user)).to be_invalid
  end
end
