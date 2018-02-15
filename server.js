const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Handle API routes
app.use('/', routes);

// All other routes handled with React
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
