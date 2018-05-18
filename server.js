const express = require('express');
const app = express();

const PORT = 8080;


app.get('/', (req, res) => {res.sendFile(__dirname + '/public/splash.html')});

app.get('/game', (req, res) => {res.sendFile(__dirname + '/public/index.html')});

app.get('/boss', (req, res) => {res.sendFile(__dirname + '/public/boss.html')});

app.get('/win', (req, res) => {res.sendFile(__dirname + '/public/win.html')});

app.get('/lose', (req, res) => {res.sendFile(__dirname + '/public/lose.html')});



app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));