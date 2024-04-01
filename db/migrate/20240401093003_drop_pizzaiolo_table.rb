class DropPizzaioloTable < ActiveRecord::Migration[7.1]
  def change
      drop_table :pizzaiolo
  end
end
