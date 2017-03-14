require_relative 'apple_tree'

RSpec.describe AppleTree do
  before :each do
    @baby_apple_tree = AppleTree.new(age=0, height=1, count=0)
    @young_apple_tree = AppleTree.new(age=4, height=10, count=100)
    @old_apple_tree = AppleTree.new(age=11, height=20, count=200)
  end
  context 'for first three years of life' do
    it 'should not grow apples' do
      @baby_apple_tree.year_gone_by
      expect(@baby_apple_tree.count).to eq(0)
    end
  end
  context 'between 3 and and 7' do

  end
  context 'above 10' do
    it 'should not grow apple for after 10 years of life' do
      @old_apple_tree.year_gone_by
      expect(@old_apple_tree.count).to eq(200)
    end
  end
  it 'should have a getter for age' do
    expect(@young_apple_tree.age).to eq(4)
    expect(@old_apple_tree.age).to eq(11)
  end
  it 'should have a setter for age' do
    expect(@young_apple_tree.age = 9).to eq(9)
    expect(@old_apple_tree.age = 15).to eq(15)
  end
  it 'should have only a getter for height' do
    expect{@young_apple_tree.height = 100}.to raise_error(NoMethodError)
  end
  it 'should have only a getter for count' do
    expect{@young_apple_tree.count = 100}.to raise_error(NoMethodError)
  end
  it 'should properly execute year_gone_by method' do
    @young_apple_tree.year_gone_by
    expect(@young_apple_tree.age).to eq(5)
    expect(@young_apple_tree.height).to eq(11)
    expect(@young_apple_tree.count).to eq(102)
  end
  it 'should lose all apples upon picking' do
    @old_apple_tree.pick_apples
    expect(@old_apple_tree.count).to eq(0)
  end
end
