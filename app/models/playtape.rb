class Playtape < ActiveRecord::Base
  has_and_belongs_to_many :tracks, :join_table => "playtapes_tracks", :class_name => "Track"
end
