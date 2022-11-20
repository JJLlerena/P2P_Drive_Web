const express = require("express");
const app = express();
const {mongoose} = require("mongoose");
require('dotenv/config');

const PORT = process.env.PORT || 3001;

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
  res.send('We are on Home');
});
 

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  () => console.log('connected to DB!')
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


