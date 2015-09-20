class CreatePlaytapesTracks < ActiveRecord::Migration
  def change
    create_table :playtapes_tracks do |t|
      t.references :playtape
      t.references :track
      t.timestamps
    end
  end
end
