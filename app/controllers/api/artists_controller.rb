class Api::ArtistsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: Artist.all
  end
end
