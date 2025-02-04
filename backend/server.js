// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes'); // Import user routes

// dotenv.config();

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/users', userRoutes);  // Use userRoutes for '/api/users'

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch(err => console.log("MongoDB connection failed:", err));

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS
const userRoutes = require('./routes/userRoutes'); 

dotenv.config();

const app = express();
const port = 5000;

// ✅ Enable CORS for your frontend (5500)
app.use(cors({
  origin: ['http://localhost:5500', 'null'],  // Allow both
  credentials: true  // Allow cookies & sessions
}));

app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection failed:", err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
