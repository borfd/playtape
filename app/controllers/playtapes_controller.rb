class PlaytapesController < ApplicationController
  def get
    playtape = Playtape.find(params[:id])
    @tracks = playtape.tracks
  end
end
