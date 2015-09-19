class TracksController < ApplicationController
  def new
    @track = Track.new
  end

  def create
    @track = Track.new(track_params)
    
    @track.save
    redirect_to @track
  end

  def get
    track = Track.find(params[:id])
    @track_url = track.url
  end

  private

  def track_params
    params.require(:track).permit(:url)
  end
end
