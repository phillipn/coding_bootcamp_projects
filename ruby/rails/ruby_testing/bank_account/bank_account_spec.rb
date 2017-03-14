require_relative 'bank_account'
RSpec.describe BankAccount do
  before :each do
    @empty_account = BankAccount.new
    @full_account = BankAccount.new(5000, 5000)
  end
  it 'should get checking account balance' do
    expect(@empty_account.checking).to eq(0)
  end
  it 'should get total balance' do
    expect(@empty_account.total).to eq(0)
  end
  it 'should allow users to withdraw cash' do
    withdrawn_money = @full_account.withdraw(50, 'checking')
    expect(withdrawn_money).to eq(50)
    expect(@full_account.checking).to eq(4950)
  end
  it 'should raise error if insufficient cash' do
    expect{@empty_account.withdraw(50, 'checking')}.to raise_error("Insufficient Amount")
  end
  it 'should raise an error is user tries to access total number of accounts' do
    expect{BankAccount.accounts}.to raise_error(NoMethodError)
  end
  it 'should raise an error is user sets interest rate' do
    expect{@empty_account.checking = 500}.to raise_error(NoMethodError)
  end
end
