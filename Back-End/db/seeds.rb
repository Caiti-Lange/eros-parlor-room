# db/seeds.rb

# Clear existing data first (optional)
User.destroy_all
Product.destroy_all

puts "Creating fake users..."
10.times do
  User.create!(
    user_id: Faker::Number.id,
    first_name: Faker::Name.name,
    last_name: Faker::Name.name,
    username: Faker::Name.user,
    password: 'password',
    password_confirmation: 'password',
    email: Faker::Internet.email  
  )
end

users = User.all
puts "Creating fake products..."
20.times do
  Product.create!(
    muse_id: Faker::Number.id,
    name: Faker::Name.name,
    origin: Faker::Name.name,
    media_type: Faker::Media.type,
    img_url: 'url',
    user_id: Faker::Number.id
  )
end

puts "Database seeded successfully with #{User.count} users and #{Product.count} products!"
