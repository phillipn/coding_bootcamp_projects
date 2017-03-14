require_relative 'project'
RSpec.describe Project do
  before(:each) do
    # updated this block to create two projects
    @project1 = Project.new('Project 1', 'description 1', 'Nick')
    @project2 = Project.new('Project 2', 'description 2', 'Zack')
  end

  it 'has a method elevator_pitch to explain name and description' do
    expect(@project1.elevator_pitch).to eq("Project 1, description 1")
    expect(@project2.elevator_pitch).to eq("Project 2, description 2")
  end

  it 'has a getter method for owner' do
    expect(@project1.owner).to eq('Nick')
  end

  it 'has a setter method for owner' do
    @project1.owner = 'That guy'
    expect(@project1.owner).to eq('That guy')
  end

  it 'has a getter for tasks' do
    expect(@project1.tasks).to eq([])
  end

  it 'has an add_task method' do
    @project1.add_task('Cut the lawn')
    expect(@project1.tasks).to eq(['Cut the lawn'])
  end

  it 'has a print tasks method' do
    @project1.add_task('Cut the lawn')
    @project1.add_task('Did my thing')
    expect(STDOUT).to receive(:puts).with(['Cut the lawn', 'Did my thing'])
    @project1.print_tasks
  end
end
