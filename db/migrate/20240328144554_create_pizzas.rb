class CreatePizzas < ActiveRecord::Migration[7.1]
  def change
      create_table :pizzaiolo do |t|
         t.string :name
         t.integer :smallPrice
         t.integer :mediumPrice
         t.string :ingredient

         t.timestamps
      end
  end
end
