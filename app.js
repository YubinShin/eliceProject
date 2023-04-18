const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const productRouter = require('./routes/product');
require("dotenv").config();
console.log("DB_URL:", process.env.DB_URL);
mongoose.connect(process.env.DB_URL, { dbName: 'eliceProject', useNewUrlParser: true });
mongoose.connection.on('connected', (err, client) => {
  console.log('MongoDB Connected');
});


const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/product', productRouter);

app.get('/', (req, res) => {
  res.send("홈페이지입니다.")
})


app.listen(8080, () => { console.log('8080포트 서버용') })