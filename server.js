const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.post('/cart', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(8080, () => { console.log('8080포트 서버용') })