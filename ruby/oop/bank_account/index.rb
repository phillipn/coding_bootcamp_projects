class BankAccount
  attr_reader :account, :balance, :savings

  @@accounts = 0

  def initialize(balance, savings)
    @account = generate_account_number
    @balance = balance
    @savings = savings
    @@accounts += 1
    @interest_rate = 0.01
  end

  def deposit(place, amount)
    place == 'account' ? @account += amount : @balance += amount
  end

  def self.show_accounts
    @@accounts
  end

  def withdraw(place, amount)
    if place == 'account'
      if @account > amount
        @account -= amount
      end
    else
      if @balance > amount
        @balance -= amount
      end
    end
  end

  def account_info
    print "Your account number is #{@account} and your checking account balance is #{@balance} and your savings account balance is #{@savings}"
  end

  private
    def generate_account_number
      str = ''
      25.times do |i|
        str += (68 + rand(28)).chr
      end
      return str
    end
end

mine = BankAccount.new(50, 50)
# puts BankAccount.show_accounts
hers = BankAccount.new(500, 500)
# puts BankAccount.show_accounts
puts hers.account
