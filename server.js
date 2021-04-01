const express = require('express');
const mongoose = require('mongoose');

const POST = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget". {
    useNewUrlParser: true,
    useFindAndModify: false
});

//routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on https://localhost:${PORT}`)
});