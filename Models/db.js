import mongoose from 'mongoose';


//const mongo_url = process.env.MONGO;
const mongo_url = 'mongodb+srv://royaman56456:1234@auth-db.iuipi.mongodb.net/auth-db?retryWrites=true&w=majority&appName=auth-db'; // Hardcoded for testing

mongoose.connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });



//   MONGO_CONN = 'mongodb+srv://royaman56456:1234@auth-db.iuipi.mongodb.net/auth-db?retryWrites=true&w=majority&appName=auth-db';
// PORT=8080
// JWT_SECRET=secret-123

