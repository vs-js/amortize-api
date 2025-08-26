const express = require('express');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

console.log('PORT:', process.env.PORT);

app.get('/', (req, res) => {
    res.status(200).send('Server for amortize api is running!');
});


app.post('/v1/submit/', (req, res) => {
    console.log("received a POST request to /v1/submit" + req.params.ingredient);


})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});