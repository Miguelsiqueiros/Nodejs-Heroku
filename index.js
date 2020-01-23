const express = require('express');

const app = express();

const Port = process.env.Port || 5000;

app.get('/*', (req, res) => res.send('OK'));

app.listen(Port, () => console.log(`Listening to port: ${Port}`));
