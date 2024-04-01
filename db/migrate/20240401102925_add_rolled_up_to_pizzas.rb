class AddRolledUpToPizzas < ActiveRecord::Migration[7.1]
  def change
    add_column :pizzas, :rolled_up, :boolean, default: false
  end
end
