const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./routes/route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const baseUri = `mongodb+srv://admin:admin@cluster0.mc2sj.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(baseUri);
mongoose.connection.on("connected", () => console.log("Mongoose is connected"));
mongoose.connection.on("error", (err) => console.log('err', err));

app.use(router);

app.listen(PORT, () => console.log("server is running"));