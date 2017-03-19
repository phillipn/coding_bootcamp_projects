require 'rails_helper'

RSpec.describe MessagesController do
  describe "GET #index" do
    it "renders the :index view" do
      get :index
      # expect(response).to be_redirect
      expect(response).to redirect_to '/users/new'
    end
  end
  describe "POST #create" do
    it "renders the :show template" do
      post :create, params: { message: 'this is my message mang' }
      # expect(response).to be_redirect
      expect(response).to redirect_to '/users/new'
    end
  end
end
