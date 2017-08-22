class Api::SongsController < ApplicationController
  before_action :authenticate_user!
  def index 
    @artist = Artist.find params[:artist_id]
    @songs = @artist.songs.all
    render json: {
      "artist" => @artist,
      "songs" => @songs
    }
  end
end
