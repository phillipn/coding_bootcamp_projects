require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'users routes' do
    it 'should route to index' do
      expect(get: "/").to route_to(controller:'messages', action:'index')
    end
    it 'should route to new' do
      expect(get: "/users/new").to route_to('users#new')
    end
    it 'should route to create' do
      expect(post: "/users").to route_to('users#create')
    end
    it 'should route to login' do
      expect(get: "/users/login").to route_to('users#login')
    end
    it 'should route to login_create' do
      expect(post: "/users/login").to route_to('users#login_create')
    end
  end
end
