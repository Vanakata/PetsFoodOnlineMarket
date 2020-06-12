const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const userRoutes = require('./routes/user')

const app = express();

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        userCreateIndex: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('DB connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

app.use("/api",userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
