class BankAccount
  attr_reader :checking, :savings
  @@accounts = 0
  def initialize checking=0, savings=0
    @checking = checking
    @savings = savings
    @@accounts += 1
  end
  def total
    @checking + @savings
  end
  def withdraw amount, account
    if account == 'checking'
      if @checking < amount
        raise "Insufficient Amount"
      end
      @checking -= amount
    elsif account == 'savings'
      if @savings < amount
        raise "Insufficient Amount"
      end
      @savings -= amount
    end
    amount
  end
end
