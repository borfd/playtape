class Track < ActiveRecord::Base
  has_and_belongs_to_many :playtapes, :join_table => "playtapes_tracks", :class_name => "Playtape"
end
