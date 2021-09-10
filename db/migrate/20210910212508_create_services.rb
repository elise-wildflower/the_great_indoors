class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :title
      t.string :description
      t.string :company
      t.integer :salary

      t.timestamps
    end
  end
end
