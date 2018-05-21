const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;


app.use(express.static(path.join(__dirname, 'build')));


app.post('/', )
app.get('/', (req, res) => {res.sendFile(__dirname + '/build/index.html')});

app.get('/game', (req, res) => {res.sendFile(__dirname + '/build/game.html')});


app.get('/win', (req, res) => {res.sendFile(__dirname + '/build/win.html')});

app.get('/lose', (req, res) => {res.sendFile(__dirname + '/build/lose.html')});

app.get('/fonts/Wargames.woff', (req, res) => res.sendFile(__dirname + '/fonts/Wargames.woff'));

app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));