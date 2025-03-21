db = db.getSiblingDB('transactions_db');  // Use your DB name

db.users.insertOne({
  name: "User",
  email: "test@example.com",
  balance: 100
});

db.products.insertOne({
  name: "Banana",
  price: 45,
  stock: 10,
});


db.products.insertOne({
  name: "Apple",
  price: 20,
  stock: 2,
});

db.products.insertOne({
  name: "Cake",
  price: 500,
  stock: 5,
});