class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :url

      t.timestamps null: false
    end
  end
end
