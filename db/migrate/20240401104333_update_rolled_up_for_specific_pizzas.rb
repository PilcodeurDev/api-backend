class UpdateRolledUpForSpecificPizzas < ActiveRecord::Migration[7.1]
   def up
    Pizza.where(name: ["Paysanne", "Pêcheur", "Rotolino"]).update_all(rolled_up: true)
  end
end
