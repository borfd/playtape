class CreatePlaytapes < ActiveRecord::Migration
  def change
    create_table :playtapes do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
