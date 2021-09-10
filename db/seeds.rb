# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Group.destroy_all
Item.destroy_all
Service.destroy_all


a = Group.create(name: "Houseplants", description:"Clean up the air, green up the space!")
b = Group.create(name: "Office", description: "Do the work, don't let the work do you!")
c = Group.create(name: "Bedroom", description: "Love where you sleep, sleep where you love!")
d = Group.create(name: "Garage", description: "Whether coming or going, we got everything you need to either park your woes or leave them in the dust.")
e = Group.create(name: "Exercise", description: "Essentials for basic optimal survival.")
f = Group.create(name: "Entertainment", description: "All work no play makes Tom a dull boy.")
g = Group.create(name: "Comfort", description: "Should you need it!")
h = Group.create(name: "Clothing", description: "Sleek, understated, consistent.  Look like Tom today.")
i = Group.create(name: "Snacks", description: "Treat yo'self")
j = Group.create(name: "Pets", description: "Pets to pet.  Make the happy.")



a.items.create(name: "Spider Plant", description: "Spikey little survivor.", price: 9.99)
a.items.create(name: "Pothos", description: "Classic vine-lookin thing.", price: 12.99)
a.items.create(name: "Polka Dot Plant", description: "Finicky, pretty, will likely die.", price: 15.99)

b.items.create(name: "Desk", description: "Duck-holding device.", price: 699.99)
b.items.create(name: "Desk Chair", description: "Bum-holding device.", price: 199.99)
b.items.create(name: "Headset", description: "Ear-holding device", price: 69.99)

c.items.create(name: "Night Light", description: "Zappy pew-pew lights in many colors!", price: 49.99)
c.items.create(name: "Bed", description: "Standard mattress.  Absolutely nothing special.", price: 799.99)
c.items.create(name: "White Noise Box", description: "Makes noise so you don't have to hear the thoughts in your head.", price: 29.99)

d.items.create(name: "2003 Honda Civic", description: "Stick shift.  Has been described as crappy.", price: 500.00)
d.items.create(name: "Disneyland Tickets", description: "Actually not for sale.", price: 9876.54)

e.items.create(name: "DanceDanceRevolution", description: "Dance your pants down a size!", price: 25.99)
e.items.create(name: "Pushup Floor", description: "The actual piece of carpet upon which Tom works out.", price: 149.99)
e.items.create(name: "Adult Hamstser Wheel", description: "Upon which one runs in circles.", price: 699.99)

f.items.create(name: "Checkers", description: "Simple yet satisfying.", price: 12.99)
f.items.create(name: "An Amazing Video Game", description: "Simply amazing.", price: 59.99)

g.items.create(name: "Banana Chair", description: "Strategically deisgned to be super rock'n'roll.", price: 89.99)
g.items.create(name: "Bean Bag Chair", description: "A chair for bean bags.", price: 99.99)
g.items.create(name: "Fuzzy Blankie", description: "Best-seller, extremely necessary", price: 39.99)

h.items.create(name: "Blue Hat", description: "A classic.", price: 19.99)
h.items.create(name: "Sweat Pants", description: "The only pants you ever really need.", price: 11.99)
h.items.create(name: "Pajamas", description: "For people who actually wear pajamas.", price: 24.99)
h.items.create(name: "Slippers", description: "Stinky things.  I prefer socks myself.", price: 19.99)

i.items.create(name: "Reeses", description: "Fabulous chocolate-peanut butter that leaves a weird, harsh feeling in my throat sometimes.", price: 1.99)
i.items.create(name: "Pringles", description: "The perfect chip, uniformly duplicated in the perfect tube.", price: 1.49)
i.items.create(name: "James' Smoothie", description: "Honestly sounds a bit yucky but we unhealthy-types try not to judge.", price: 1.99)

j.items.create(name: "Monkey", description: "The monkey pet that Tom always wanted.", price: 2499.99)
j.items.create(name: "Tiger", description: "Zebra-less stripes and harmless cuddles.", price: 3499.99)



Service.create(title: "Wendy's Delivery Person", description: "We need someone who is willing to bring the Wendy's!", company: "Tom Kitchen Co.", salary: 15000)
Service.create(title: "Laundry", description: "Part time laundry person to come do Tom's Laundry.", company: "Tom's Chores LLC", salary: 7000)
Service.create(title: "Vacuum", description: "Part time vacuum person to come do the Vacuuming,", company: "Tom's Chores LLC", salary: 6000)
Service.create(title: "Zoom Stand-In", description: "Full time seasonal position to be here while Tom is not.", company: "Tom or Row", salary: 8000)
Service.create(title: "Wife", description: "Full time position involving emotional support and much love.", company: "Basic Tom Needs Inc.", salary: 60000)
Service.create(title: "In-Laws", description: "Flexible hours, two positions to fill.  Remote work okay most of the time.", company: "Basic Tom Needs Inc.", salary: 15000)
Service.create(title: "Friend", description: "Tom just needs a friend sometimes.  Part time position.", company: "Basic Tom Needs Inc.", salary: 20000)
Service.create(title: "Lawncare", description: "Tom can't mow the lawn due to being an indoors person, but the lawn still needs care.", company: "Tom Contracting", salary: 9000)
Service.create(title: "Handy Man", description: "For when things go wrong that have nothign to do with code.", company: "Tom Contracting", salary: 8000)
Service.create(title: "Dishwasher", description: "Someone to do the dishes.  Full time position.", company: "Tom Kitchen Co.", salary: 14000)

  puts "seeded #{Group.all.size} groups, #{Item.all.size} items, and #{Service.all.size} services!"