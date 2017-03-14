require 'spec_helper'

describe Stringer do
  it "concatenates undefined number of strings with a space" do
    expect(Stringer.spacify "Oscar", "Vazquez", "Zweig", "Olasaba", "Hernandez", "Ricardo", "Mendoza").to eq("Oscar Vazquez Zweig Olasaba Hernandez Ricardo Mendoza")
  end
  it "minifies word appropriately" do
    expect(Stringer.minify("Nickelson", 3)).to eq("Nic...")
    expect(Stringer.minify("Hello", 10)).to eq("Hello")
  end
  it "replacifies strings with other strings" do
    expect(Stringer.replacify("I can't do this", "can't", "can")).to eq("I can do this")
  end
  it 'should tokenize' do
    expect(Stringer.tokenize("I love to code")).to eq(["I", "love", "to", "code"])
  end
  it 'should removify' do
    expect(Stringer.removify("I'm not a developer", "not")).to eq("I'm a developer")
  end
end
