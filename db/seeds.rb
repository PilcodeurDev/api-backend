# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Pizza.destroy_all

# create 10 pizzas
10.times do
   Pizza.create(
      name: Faker::Food.dish,
      smallPrice: Faker::Number.between(from: 5, to: 8),
      mediumPrice: Faker::Number.between(from: 9, to: 15),
      ingredient: 3.times.map { Faker::Food.ingredient }.join(', ')
   )
end
