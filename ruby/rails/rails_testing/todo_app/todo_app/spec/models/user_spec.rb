require 'rails_helper'

RSpec.describe User, type: :model do
  context 'register function' do
    context 'valid creation' do
      it { expect(build(:user)).to be_valid }
    end
    context 'invalid creation' do
      it 'Invalid email format' do
        expect(build(:user, email: "")).to be_invalid
      end
      it 'Invalid password' do
        expect(build(:user, password: "abc")).to be_invalid
      end
      it 'Passwords do not match' do
        expect(build(:user, password: "abc", password_confirmation: "abcd")).to be_invalid
      end
    end
  end
end
