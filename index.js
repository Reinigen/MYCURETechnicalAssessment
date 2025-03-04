// Import Dependencies and Modules
const express = require("express");

// Import Route Modules
const userRoutes = require("./routes/user");

// Server Setup
const app = express();
// TRY AGAIN
app.use(express.json());

// Call Backend Routes
app.use("/users", userRoutes);
//[SECTION] Server Gateway Response
if (require.main === module) {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`API is now online on port ${process.env.PORT || 3000}`);
  });
}

module.exports = { app };
